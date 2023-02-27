import { Router } from "express";
import userRoutes from "./userroutes.js";
import thoughtRoutes from "./thoughtroutes.js";
const router = Router();

// router.get("/user", async (req, res) => {
//   console.log("hello");
//   res.send("hello");
// });

router.use("/api", userRoutes);
router.use("/api", thoughtRoutes);

export default router;
