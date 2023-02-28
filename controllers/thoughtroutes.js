import { Router } from "express";
const router = Router();

router.get("/thought", async (req, res) => {
  console.log("hey");
  res.send("hey");
});
export default router;

// get all thoughts

// get thought by id

// post new thought, push id to users thoughts array field

// put update thought by id

// delete thought by id

// thoughts/:thoughtid/reactions

// post to create new reaction in thoughts reaction array

// delete reactions by reactions id value
