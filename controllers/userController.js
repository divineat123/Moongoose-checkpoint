import User from "../models/userModel.js";

// Create a user
export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      status: "success",
      data: user
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "success",
      data: users
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
