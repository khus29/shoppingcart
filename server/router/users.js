import express from "express";
import Users from "../models/Users";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ data: [] });
});
router.get("/:param", (req, res) => {
  const param = req.params.param;
  Users.find({ name: param }, function(err, user) {
    res.json(user);
  });
});
router.post("/create", (req, res) => {
  const user = new Users(req.body);
  user
    .save()
    .then(user => {
      res.json("User added successfully");
    })
    .catch(err => {
      res.status(400).json("Error while creating the User " + err);
    });
});

export default router;
