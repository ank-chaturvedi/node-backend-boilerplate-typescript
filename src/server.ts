import express, { Application } from "express";
import IndexRoute from "./TestModule/index.route";
export class AppServer {
  app: Application;

  constructor() {
    this.app = express();
    this.setupController();
  }

  setupController() {
    this.app.use("/api", new IndexRoute().router);
  }
}

export default new AppServer().app;
