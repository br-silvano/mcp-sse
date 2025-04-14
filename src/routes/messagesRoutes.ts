import { Request, Response, Router } from "express";
import { sseClients } from "./sseRoutes";

const router = Router();

router.post("/messages", async (req: Request, res: Response) => {
  const sessionId = req.query.sessionId as string;
  const transport = sseClients[sessionId];
  if (transport) {
    await transport.handlePostMessage(req, res);
  } else {
    res.status(400).send("Transport not found for the given sessionId.");
  }
});

export { router as messagesRoutes };
