import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  {
    name: "rolldice",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "roll_dice",
      description: "Rolls an N-sided dice and returns a random integer.",
      inputSchema: {
        type: "object",
        properties: {
          sides: {
            type: "number",
            description: "Number of sides on the dice (default 6).",
            minimum: 2,
          },
        },
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name !== "roll_dice") {
    throw new Error(`Unknown tool: ${request.params.name}`);
  }

  const sides = Number(request.params.arguments?.sides ?? 6);
  if (!Number.isInteger(sides) || sides < 2) {
    return {
      content: [{ type: "text", text: "Invalid 'sides' value. Use an integer >= 2." }],
      isError: true,
    };
  }

  const result = Math.floor(Math.random() * sides) + 1;
  return {
    content: [{ type: "text", text: `🎲 d${sides} result: ${result}` }],
  };
});

const transport = new StdioServerTransport();
await server.connect(transport);
