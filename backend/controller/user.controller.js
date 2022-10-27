const User = require("../model/user.model");

const getUser = async (req, res) => {
  const users = await User.find({});
  return res.status(200).json({ users });
};

const createUser = async (req, res) => {
  const { username } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    return res.status(400).json({ msg: "user already exists" });
  }
  new_user = await User.create(req.body);

  return res.status(200).json({ user: new_user });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOneAndDelete({ _id: id });
  if (!user) {
    return res.status(404).json({ msg: "user not found" });
  }
  return res.status(200).json(user);
};

module.exports = {
  getUser,
  createUser,
  deleteUser,
};
