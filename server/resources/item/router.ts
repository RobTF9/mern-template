import { Router } from "express";

const router = Router();

router.route("/item").get(async (req, res) => {
  try {
    if (req) {
      res.send({ message: "Hello" });
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
