import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export const mcpServer: McpServer = new McpServer({
  name: "MCP Server",
  version: "1.0.0",
});

mcpServer.tool(
  "add",
  "Realiza a soma de dois números.",
  {
    a: z.number().describe("O primeiro número a ser somado"),
    b: z.number().describe("O segundo número a ser somado"),
  },
  async ({ a, b }) => {
    const resultado = a + b;
    return {
      content: [{ type: "text", text: `Resultado: ${resultado}` }],
    };
  }
);

mcpServer.tool(
  "subtract",
  "Realiza a subtração entre dois números.",
  {
    a: z.number().describe("O número do qual será subtraído"),
    b: z.number().describe("O número a ser subtraído"),
  },
  async ({ a, b }) => {
    const resultado = a - b;
    return {
      content: [{ type: "text", text: `Resultado: ${resultado}` }],
    };
  }
);

mcpServer.tool(
  "multiply",
  "Realiza a multiplicação de dois números.",
  {
    a: z.number().describe("O primeiro número a ser multiplicado"),
    b: z.number().describe("O segundo número a ser multiplicado"),
  },
  async ({ a, b }) => {
    const resultado = a * b;
    return {
      content: [{ type: "text", text: `Resultado: ${resultado}` }],
    };
  }
);

mcpServer.tool(
  "divide",
  "Realiza a divisão de dois números, validando que o divisor não seja zero.",
  {
    a: z.number().describe("O dividendo, ou seja, o número a ser dividido"),
    b: z
      .number()
      .describe("O divisor, que não pode ser zero")
      .refine((val) => val !== 0, { message: "Divisor não pode ser zero" }),
  },
  async ({ a, b }) => {
    const resultado = a / b;
    return {
      content: [{ type: "text", text: `Resultado: ${resultado}` }],
    };
  }
);
