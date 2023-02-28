import { Router } from "express";
import Thoughts from "../models/thoughts.js";
import User from "../models/users.js";
import Reaction from "../models/reactions.js";
const router = Router();

// get all thoughts
router.get("/thoughts", async (req, res) => {
  let thoughts = [];
  thoughts = await Thoughts.find({});
  res.send(thoughts);
});

// get thought by id
router.get("/thoughts/:id", async (req, res) => {
  let thoughtsone = [];
  thoughtsone = await Thoughts.find({ _id: req.params.id });
  const results = {
    thoughttext: thoughtsone[0].thoughttext,
    username: thoughtsone[0].username,
  };
  res.send(results);
});

// post new thought, push id to users thoughts array field
router.post("/thoughts/new", async (req, res) => {
  const newthought = await Thoughts.create({ ...req.body });
  console.log("okay");
  const thoughtattach = await User.updateOne(
    { username: newthought.username },
    {
      $push: {
        thoughts: {
          thoughttext: newthought.thoughttext,
          username: newthought.username,
        },
      },
    }
  );
  console.log(thoughtattach);
  res.send(newthought);
});

// put update thought by id
router.put("/thoughts/update/:id", async (req, res) => {
  const updatedthought = await Thoughts.updateOne(
    { _id: req.params.id },
    { $set: { ...req.body } }
  );
  res.send(updatedthought);
});

// delete thought by id
router.delete("/thoughts/delete/:id", async (req, res) => {
  await Thoughts.deleteOne({ _id: req.params.id });
  res.send("deleted!");
});

// thoughts/:thoughtid/reactions
// post to create new reaction in thoughts reaction array
router.post("/thoughts/:thoughtid/reactions", async (req, res) => {
  const newreaction = await Reaction.create({ ...req.body });
  console.log("okay");
  const reactionattach = await Thoughts.updateOne(
    { _id: req.params.thoughtid },
    {
      $push: {
        reactions: {
          reactionBody: newreaction.reactionBody,
          username: newreaction.username,
        },
      },
    }
  );
  console.log(reactionattach);
  res.send(newreaction);
});

// delete reactions by reactions id value
router.delete("/reactions/delete/:id", async (req, res) => {
  await Reaction.deleteOne({ _id: req.params.id });
  res.send("deleted!");
});
export default router;
