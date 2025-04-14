import { Request, Response, NextFunction } from "express";
import { env } from '../config/env';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).send("Unauthorized: Token ausente ou formato inválido");
    return;
  }
  const token = authHeader.split(" ")[1];
  if (token !== env.BEARER_TOKEN) {
    res.status(401).send("Unauthorized: Token inválido");
    return;
  }
  next();
}
