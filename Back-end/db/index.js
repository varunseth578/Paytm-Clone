const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://ivarunseth:yLMkrysxa42X6ORu@cluster0.sea1c.mongodb.net/"
);

// Define schemas
const userSchema = mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
