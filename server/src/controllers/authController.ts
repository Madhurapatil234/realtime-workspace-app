import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";

// Register User
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

   res.status(201).json({
  message: "User Registered Successfully",
  user: {
    id: user._id,
    name: user.name,
    email: user.email,
  },
});
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Registration Failed",
    });
  }
};

// Login User
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user: any = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Login Failed",
    });
  }
};