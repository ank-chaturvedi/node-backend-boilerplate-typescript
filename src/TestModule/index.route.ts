import { IndexController } from "./controllers/index.controller";
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
