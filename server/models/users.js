import mongoose from "mongoose";
var Schema = mongoose.Schema; //Define collection for schema and items

var Users = new Schema(
  {
    userId: { type: String },
    name: { type: String },
    email: { type: String },
    password: { type: String }
  },
  { collection: "users" }
);

module.exports = mongoose.model("Users", Users);
