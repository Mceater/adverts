const models = require("./models/models.js");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await models.User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await models.User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can delete only your account!");
  }
});

//get a user
// router.get("/:id", async (req, res) => {
//   const userId = req.query.userId;
//   const username = req.query.username;
//   try {
//     const user = userId
//       ? await models.User.findById(userId)
//       : await models.User.findOne({ username: username });
//     const { password, updatedAt, ...other } = user._doc;
//     res.status(200).json(other);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//get all other  users
router.get("/:id", async (req, res, next) => {
  try {
    const users = await models.User.find({
      _id: { $ne: req.params.id },
    }).select(["username", "_id"]);
    return res.json(users);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
