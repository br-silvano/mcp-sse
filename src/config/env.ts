import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  PORT: z.string().default("8080"),
  BEARER_TOKEN: z.string(),
  ALLOWED_ORIGINS: z.string().default("")
});

export const env = envSchema.parse(process.env);
