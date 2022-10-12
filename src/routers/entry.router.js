import express from "express";
import { signUpValidator } from "../middlewares/entry.middleware.js";
import { signInValidator } from "../middlewares/entry.middleware.js";
import { signUp, signIn } from "../controllers/entry.controller.js";

const router = express.Router();

router.post("/signup", signUpValidator, signUp);
router.post("/signin", signInValidator, signIn);

export default router;
