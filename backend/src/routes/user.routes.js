import express from "express";
import {
  getAllClients,
  getAllAgencies,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/clients", getAllClients);
router.get("/agencies", getAllAgencies);

export default router;
