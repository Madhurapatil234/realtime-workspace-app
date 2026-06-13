import express from "express";
import { createWorkspace } from "../controllers/workspaceController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/create", protect, createWorkspace);

export default router;