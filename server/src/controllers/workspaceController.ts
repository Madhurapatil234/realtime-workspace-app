import { Request, Response } from "express";
import Workspace from "../models/Workspace";

// Create Workspace
export const createWorkspace = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, description, owner } = req.body;

    const workspace = await Workspace.create({
      name,
      description,
      owner,
      members: [owner],
    });

    res.status(201).json({
      message: "Workspace Created Successfully",
      workspace,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Workspace Creation Failed",
    });
  }
};

// Get All Workspaces
export const getAllWorkspaces = async (
  req: Request,
  res: Response
) => {
  try {
   const workspaces = await Workspace.find().select("-__v");

    res.status(200).json({
      count: workspaces.length,
      workspaces,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch workspaces",
    });
  }
};