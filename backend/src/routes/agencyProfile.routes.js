import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { createAgencyProfile } from "../controllers/agencyProfile.controller.js";

const router = express.Router();

router.post("/", protect, createAgencyProfile);

export default router;
