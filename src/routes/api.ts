import { NextFunction, Request, Response, Router } from "express";
import { readEvents } from "../utils/file";

const apiRouter = Router();

apiRouter.get(
  "/anomalies",
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await readEvents();
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
);

export { apiRouter };
