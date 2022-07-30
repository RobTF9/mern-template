import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import router from "./resources/item/router";
import path from "path";
import dotenv from "dotenv";
import connect from "./db/connect";

dotenv.config();

export const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));
app.set("trust proxy", 1);

app.use("/api", router);

const clientPath = path.join(__dirname, "..", "client");
app.use(express.static(clientPath));
app.use("*", express.static(clientPath));

async function startServer(): Promise<void> {
  try {
    connect();
    app.listen(port, () => console.log(`Server running on ${port}`));
  } catch (error) {
    console.error(error);
  }
}

export default startServer;
