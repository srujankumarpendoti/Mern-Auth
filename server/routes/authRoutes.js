import {
  isAuthenticated,
  login,
  logout,
  register,
  resetPassword,
  sendResetOtp,
  sendVerifyOtp,
  verifyEmail,
} from "../controllers/authController.js";
import express from "express";
import userAuth from "../middleware/userAuth.js";

const authRouther = express.Router();

authRouther.post("/register", register);
authRouther.post("/login", login);
authRouther.post("/logout", logout);
authRouther.post("/send-verify-otp", userAuth, sendVerifyOtp);
authRouther.post("/verify-account", userAuth, verifyEmail);
authRouther.get("/is-auth", userAuth, isAuthenticated);
authRouther.post("/send-reset-otp", sendResetOtp);
authRouther.post("/reset-password", resetPassword);

export default authRouther;
