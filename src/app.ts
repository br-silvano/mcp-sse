import cors from 'cors';
import express from "express";
import { env } from './config/env';
import { authMiddleware } from "./middlewares/authMiddleware";
import { conditionalJsonMiddleware } from "./middlewares/jsonMiddleware";
import { messagesRoutes } from "./routes/messagesRoutes";
import { sseRoutes } from "./routes/sseRoutes";

const app = express();

app.set("trust proxy", true);
app.use(
  cors({
    origin: env.ALLOWED_ORIGINS?.split(",") || ["*"],
  })
);

app.use(authMiddleware);

app.use(conditionalJsonMiddleware);

app.use(sseRoutes);
app.use(messagesRoutes);

export default app;
