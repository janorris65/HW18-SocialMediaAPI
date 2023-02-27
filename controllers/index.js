import { Router } from "express";
import userRoutes from "./userroutes.js";

const router = Router();

// router.get("/user", async (req, res) => {
//   console.log("hello");
//   res.send("hello");
// });

// import thoughtRoutes from "./thoughtroutes";

router.use("/api", userRoutes);
// router.use("/api", thoughtRoutes);

export default router;
