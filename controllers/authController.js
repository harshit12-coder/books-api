import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// SIGNUP
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Check: Ye email pehle se exist karta hai?
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Ye email already registered hai!" });
    }

    // 2. Password encrypt karo
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Naya user banao encrypted password ke saath
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Account ban gaya! Ab login karo." });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Email se user dhundho
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Email registered nahi hai!" });
    }

    // 2. Password match karo
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Password galat hai!" });
    }

    // 3. JWT Token banao!
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login ho gaye! Ye lo tumhara token.",
      token,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
