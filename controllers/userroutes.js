import { Router } from "express";
// import users from "../models/users.js";
import User from "../models/users.js";
const router = Router();

// get all users
router.get("/user", async (req, res) => {
  let users = [];
  users = await User.find({});
  res.send(users);
});

// get user by id, populate thought and friend data
router.get("/user/:id", async (req, res) => {
  let usersone = [];
  usersone = await User.find({ _id: req.params.id });
  const results = {
    username: usersone[0].username,
    friends: usersone[0].friends,
  };
  res.send(results);
});

// post new user
router.post("/user/new", async (req, res) => {
  const newuser = await User.create({ ...req.body });
  res.send(newuser);
});

export default router;

// put update by id
router.put("/user/update/:id", async (req, res) => {
  const updateduser = await User.updateOne(
    { _id: req.params.id },
    { $set: { ...req.body } }
  );
  res.send(updateduser);
});
// delete user by id
router.delete("/user/delete/:id", async (req, res) => {
  await User.deleteOne({ _id: req.params.id });
  res.send("deleted!");
});

// user/:id/friends/:friendsid
// post add new friend to users friend list
router.post("/user/:userid/friends/:friendsid", async (req, res) => {
  const userpal = await User.updateOne(
    { _id: req.params.userid },
    { $push: { friends: req.params.friendsid } }
  );
  res.send(userpal);
});

// delete remove a friend from a friends list
router.delete("/user/:userid/friends/:friendsid/delete", async (req, res) => {
  const userpal = await User.updateOne(
    { _id: req.params.userid },
    { $pull: { friends: req.params.friendsid } }
  );
  res.send(userpal);
});
