import { Router } from "express";
const router = Router();

router.get("/user", async (req, res) => {
  console.log("hello");
  res.send("hello");
});
export default router;

// get all users

// get user by id, populate thought and friend data

// post new user

// put update by id

// delete user by id

// user/:id/friends/:friendsid

// post add new friend to users friend list

// delete remove a friend from a friends list
