const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ivarunseth:yLMkrysxa42X6ORu@cluster0.sea1c.mongodb.net/"
);

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
