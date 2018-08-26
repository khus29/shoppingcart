import express from "express";
import Category from "../models/Category";
const router = express.Router();

router.get("/:param", (req, res) => {
  const param = req.params.param;
  let idArray = param.split(",").map(val => Number(val));
  Category.find({ categoryId: { $in: idArray } }, function(err, category) {
    res.json(category);
  });
});
export default router;
