import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  {
    name: "bootcamp-ai-agent",
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
      name: "daily_plan",
      description: "Creates a concise bootcamp daily plan from a focus topic and available hours.",
      inputSchema: {
        type: "object",
        properties: {
          topic: { type: "string", description: "Study topic, e.g. 'Node.js APIs'" },
          hours: { type: "number", description: "Available study hours for today", minimum: 1 },
        },
        required: ["topic", "hours"],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name !== "daily_plan") {
    throw new Error(`Unknown tool: ${request.params.name}`);
  }

  const topic = String(request.params.arguments?.topic ?? "General study");
  const hours = Number(request.params.arguments?.hours ?? 2);

  if (!Number.isFinite(hours) || hours < 1) {
    return {
      content: [{ type: "text", text: "Invalid 'hours' value. Use a number >= 1." }],
      isError: true,
    };
  }

  const warmup = Math.max(0.5, Math.round(hours * 0.2 * 10) / 10);
  const practice = Math.max(0.5, Math.round(hours * 0.6 * 10) / 10);
  const review = Math.max(0.5, Math.round((hours - warmup - practice) * 10) / 10);

  const plan = [
    `Topic: ${topic}`,
    `1) Warm-up review (${warmup}h)`,
    `2) Hands-on practice (${practice}h)`,
    `3) Reflection + notes (${review}h)`,
    "4) End with 3 key takeaways",
  ].join("\n");

  return {
    content: [{ type: "text", text: plan }],
  };
});

const transport = new StdioServerTransport();
await server.connect(transport);
