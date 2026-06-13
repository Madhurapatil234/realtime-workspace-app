import express from "express";
import { createWorkspace } from "../controllers/workspaceController";

const router = express.Router();

router.post("/create", createWorkspace);

export default router;