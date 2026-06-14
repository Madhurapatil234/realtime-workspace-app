import express from "express";
import {
  createWorkspace,
  getAllWorkspaces,
} from "../controllers/workspaceController";

import { protect } from "../middleware/authMiddleware";

const router = express.Router();

// Create Workspace
router.post("/create", protect, createWorkspace);

// Get All Workspaces
router.get("/", protect, getAllWorkspaces);

export default router;