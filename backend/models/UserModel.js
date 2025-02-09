const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const UserSchema = Schema({
  username: { type: String, require: true, min: 4, unique: true },
  password: { type: String, require: true },
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
