import { Request, Response } from "express";
import MainController from "../../shared/application/main.controller";
import SuccessDTO from "../../shared/application/success.dto";

/**
 * Method name should start with the Request type
 * Example: GET PONG should be name as getMethodName
 */
export class IndexController extends MainController {
  constructor(req: Request, res: Response) {
    super(req, res);
  }
  getPong() {
    return new SuccessDTO({}, "Pong");
  }

  postPing() {}
}
