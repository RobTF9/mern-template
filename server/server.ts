import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";

export const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

async function startServer(): Promise<void> {
  try {
    // await connect();
    app.listen(port, () => console.log(`Server running on ${port}`));
  } catch (error) {
    console.error(error);
  }
}

export default startServer;
