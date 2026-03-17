import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  {
    name: "calendar-booking",
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
      name: "check_availability",
      description: "Returns mock booking availability for a given date.",
      inputSchema: {
        type: "object",
        properties: {
          date: {
            type: "string",
            description: "Date in YYYY-MM-DD format",
          },
        },
        required: ["date"],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name !== "check_availability") {
    throw new Error(`Unknown tool: ${request.params.name}`);
  }

  const date = String(request.params.arguments?.date ?? "");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return {
      content: [{ type: "text", text: "Invalid 'date'. Use YYYY-MM-DD." }],
      isError: true,
    };
  }

  return {
    content: [
      {
        type: "text",
        text: `Available slots for ${date}: 10:00, 13:30, 16:00`,
      },
    ],
  };
});

const transport = new StdioServerTransport();
await server.connect(transport);
