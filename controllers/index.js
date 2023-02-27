import { Router } from "express";

const router = Router();

router.get("/user", async (req, res) => {
  console.log("hello");
  res.send("hello");
});

// import userRoutes from "./userroutes";
// import thoughtRoutes from "./thoughtroutes";

// router.use("/api", userRoutes);
// router.use("/api", thoughtRoutes);

export default router;
