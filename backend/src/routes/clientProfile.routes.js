import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { createClientProfile } from "../controllers/clientProfile.controller.js";

const router = express.Router();

router.post("/", protect, createClientProfile);

export default router;