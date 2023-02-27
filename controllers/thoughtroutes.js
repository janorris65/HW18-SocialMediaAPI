import { Router } from "express";
const router = Router();

router.get("/thought", async (req, res) => {
  console.log("hey");
  res.send("hey");
});
export default router;
