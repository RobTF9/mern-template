import { Router } from "express";
import { create, readAll } from "./controller";

const router = Router();

router.route("/item").post(create).get(readAll);

export default router;
