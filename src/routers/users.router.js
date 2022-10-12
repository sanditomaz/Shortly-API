import express from "express";
import { sendUser, sendRanking } from "../controllers/users.controller.js";
import { validateUser } from "../middlewares/users.middleware.js";

const router = express.Router();

router.get("/users/me", validateUser, sendUser);
router.get("/ranking", sendRanking);

export default router;
