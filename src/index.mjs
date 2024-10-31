import express from "express";
import authRouter from "./routes/authRoutes.mjs";
import userRouter from "./routes/userRoutes.mjs";

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

// start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on port :${PORT}`);
});

// swatighosh4500
// anishswarnakar9011
