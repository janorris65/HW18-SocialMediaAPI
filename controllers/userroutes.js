import { Router } from "express";
const router = Router();

//const router = require("express").Router();

router.get("/user", async (req, res) => {
  console.log("hello");
  res.send("hello");
});
export default router;
