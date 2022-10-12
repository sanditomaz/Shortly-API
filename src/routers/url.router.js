import express from "express";
import {
  urlPostValidator,
  validateUrl,
  validateDeletion,
} from "../middlewares/url.middleware.js";
import {
  insertUrl,
  sendUrl,
  sendShortUrl,
  deleteUrl,
} from "../controllers/url.controller.js";

const router = express.Router();

router.post("/urls/shorten", urlPostValidator, insertUrl);
router.get("/urls/:id", validateUrl, sendUrl);
router.get("/urls/open/:shortUrl", validateUrl, sendShortUrl);
router.delete("/urls/:id", validateDeletion, deleteUrl);

export default router;
