import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { Request, Response, Router } from "express";
import { mcpServer } from "../mcp/mcpServer";

const sseClients: { [sessionId: string]: SSEServerTransport } = {};

const router = Router();

router.get("/sse", async (req: Request, res: Response) => {
  const transport = new SSEServerTransport("/messages", res);
  sseClients[transport.sessionId] = transport;

  res.on("close", () => {
    delete sseClients[transport.sessionId];
  });

  await mcpServer.connect(transport);
});

export { sseClients, router as sseRoutes };
