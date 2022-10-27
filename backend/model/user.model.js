const { Schema, model } = require("mongoose");

const urerSchema = Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
  },
});

module.exports = model("user", urerSchema);
