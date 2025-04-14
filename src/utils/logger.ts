import pino from "pino";
import { env } from '../config/env';

const isDev = env.NODE_ENV !== "production";

const logger = pino({
  level: isDev ? 'debug' : 'info',
  transport: isDev
    ? {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:standard',
        ignore: 'pid,hostname',
      },
    }
    : undefined,
});

export default logger;
