import { Request, Response } from "express";

class MainController {
  req: Request;
  res: Response;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
  }
}

export default MainController;
