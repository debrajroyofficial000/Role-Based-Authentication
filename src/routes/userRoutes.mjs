import { Router } from "express";
import verifyToken from "../middlewares/authMiddleware.mjs";
import authorizedRole from "../middlewares/roleMiddleware.mjs";
const userRouter = Router();

// Only admin can access
userRouter.get("/admin", verifyToken, authorizedRole("admin"), (req, res) => {
  res.json({ message: "hello admin" });
});

// Only admin and manager can access
userRouter.get(
  "/manager",
  verifyToken,
  authorizedRole("admin", "manager"),
  (req, res) => {
    res.json({ message: "hello manager" });
  }
);

// All roles can access
userRouter.get(
  "/user",
  verifyToken,
  authorizedRole("admin", "manager", "user"),
  (req, res) => {
    res.json({ message: "hello user" });
  }
);

export default userRouter;
