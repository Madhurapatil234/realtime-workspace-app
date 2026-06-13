import { Request, Response } from "express";
import Workspace from "../models/Workspace";

export const createWorkspace = async (
  req: Request,
  res: Response
) => {
  try {
    console.log(req.body);

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