import { createServer } from "http";
import dotenv from "dotenv";
dotenv.config();
import app from "./server";
import CONFIG from "./config";

const server = createServer(app);

server.listen(CONFIG.PORT, () => {
  console.log(`Listening on port ${CONFIG.PORT}`);
});
