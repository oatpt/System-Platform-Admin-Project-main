const router = require("express").Router();
const {
  getUser,
  deleteUser,
  createUser,
} = require("../controller/user.controller");

router.route("/").get(getUser).post(createUser);
router.route("/:id").delete(deleteUser);

module.exports = router;
