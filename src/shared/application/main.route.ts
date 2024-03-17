import express, { Router, Request, Response, NextFunction } from "express";
import MainController from "./main.controller";
import { responseProcessor } from "../utils/response.processor";

export class MainRoute {
  router: Router;
  controller: typeof MainController;

  constructor(controller: typeof MainController) {
    this.router = express.Router();
    this.controller = controller;
  }

  attach(method: string) {
    const wrapperFn = async (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      return await new this.controller(req, res)[method]();
    };
    return responseProcessor(wrapperFn);
  }
}
