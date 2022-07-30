import { RequestHandler } from "express";
import Item from "./model";

export const create: RequestHandler = async (req, res, next) => {
  try {
    const item = await Item.create({
      ...req.body,
    });
    return res.status(200).json({ data: item });
  } catch (error) {
    return next(error);
  }
};

export const readAll: RequestHandler = async (_, res, next) => {
  try {
    const items = await Item.find();
    return res.json(200).json({ data: items });
  } catch (error) {
    return next(error);
  }
};
