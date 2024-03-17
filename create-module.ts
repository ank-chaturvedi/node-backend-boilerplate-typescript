import fs from "fs";
const args = process.argv.slice(2);

if(!args[0]) {
    console.log("Please provide a module name");
    process.exit(0);
}

function getModuleName() {
    return args[0].charAt(0).toUpperCase() + args[0].slice(1) + "Module";
}

const moduleName = getModuleName();

fs.mkdirSync(`./src/${moduleName}`);
fs.mkdirSync(`./src/${moduleName}/controllers`);
fs.mkdirSync(`./src/${moduleName}/services`);
fs.mkdirSync(`./src/${moduleName}/types`);
fs.mkdirSync(`./src/${moduleName}/validators`);
fs.mkdirSync(`./src/${moduleName}/mappers`);
fs.mkdirSync(`./src/${moduleName}/dtos`);

fs.writeFileSync(`./src/${moduleName}/index.route.ts`, `import { IndexController } from "./controllers/index.controller";
import { MainRoute } from "../shared/application/main.route";

class IndexRoute extends MainRoute {
  constructor() {
    super(IndexController);
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.get("/ping", this.attach("getPong"));
    this.router.post("/ping", this.attach("postPing"));
  }
}

export default IndexRoute;
`);

fs.writeFileSync(`./src/${moduleName}/controllers/index.controller.ts`, `import { Request, Response } from "express";
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
`);

console.log(`${moduleName} created successfully`);