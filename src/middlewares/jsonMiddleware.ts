import express, { NextFunction, Request, Response } from "express";

export function conditionalJsonMiddleware(req: Request, res: Response, next: NextFunction) {
  if (req.path === "/messages") {
    return next();
  }
  return express.json()(req, res, next);
}
