import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  res.json({
    message: "Register Route Working",
  });
};

export const login = async (req: Request, res: Response) => {
  res.json({
    message: "Login Route Working",
  });
};