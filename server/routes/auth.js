const models = require("./models/models.js");
const bcrypt = require("bcrypt");
const router = require("express").Router();

router.post("/register", async  (req, res) => {
  try {
  const { username, password } = req.body;
  const usernameCheck = await models.User.findOne({ username });
  if (usernameCheck) {
    console.log("already Taken");
    return res.json({ message: "Username already used", status: false });
  }
  const hashedPW = await bcrypt.hash(password, 10);
  const user = await models.User.create({
    username,
    password: hashedPW,
  });
  delete user.password;
  return res.json({ status: true, user });
} catch (err) {
  res.status(500).json(err);
}
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await models.User.findOne({ username });
  if (!user) {
    console.log("error");
    return res.json({
      msg: "Invalid username or password",
      status: false,
    });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid)
    return res.json({
      msg: "Invalid username or password",
      status: false,
    });
  delete user.password;

  return res.json({ status: true, user });
});

/* Create a new session for a user */

/*
 * validUser - check for a valid user via Authorization header
 *   return the username if found, false if not
 */
router.validUser = async (request) => {
  const authHeader = request.get("Authorization");
  if (authHeader && authHeader.toLowerCase().startsWith("basic ")) {
    const token = authHeader.substring(6);
    const match = await models.Session.findOne({ _id: token });

    if (match) {
      return match._id;
    }
  }
  return false;
};

module.exports = router;
