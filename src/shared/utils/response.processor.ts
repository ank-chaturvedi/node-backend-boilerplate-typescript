import { Request, Response, NextFunction } from "express";
import SuccessDTO from "../application/success.dto";
import { ApiError, BadRequest } from "./apiError";

type AsyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<SuccessDTO>;

export const errorProcessor = (res: Response, error: ApiError) => {
  return res.status(error.statusCode).json(error.toResponseJson());
};

export const responseProcessor = (asyncFn: AsyncFunction) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(asyncFn(req, res, next))
      .then((response: SuccessDTO) => {
        return res.status(response.statusCode).json(response.toResponseJson());
      })
      .catch((error) => {
        console.log(error);
        if (error instanceof ApiError) {
          return errorProcessor(res, error);
        }
        const badRequest = new BadRequest();
        return errorProcessor(res, badRequest);
      });
  };
};
