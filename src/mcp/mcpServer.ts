import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export const mcpServer = new McpServer({
  name: "MCP Server",
  version: "1.0.0",
});

mcpServer.tool(
  "add",
  {
    a: z.number(),
    b: z.number(),
  },
  async ({ a, b }) => {
    const resultado = a + b;
    return {
      content: [{ type: "text", text: `Resultado: ${resultado}` }],
    };
  }
);
