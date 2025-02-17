import validator from "validator";
import userModel from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if ((!name, !email, !password)) {
      return res
        .status(404)
        .json({ status: false, message: "Some fileds are missing :)" });
    }

    if (!validator.isEmail(email)) {
      return res
        .status(403)
        .json({ status: false, message: "Enter a Valid Email :)" });
    }

    if (password.length > 8) {
      return res.status(403).json({
        status: false,
        message: "Enter min 8 charector long password :)",
      });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(500).json({
        status: false,
        message: "User with this email already exits",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
      name,
      email,
      password: hashedPassword,
    };

    const user = await userModel(newUser);
    const saveUser = await user.save();

    const token = jwt.sign({ id: saveUser._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res
      .status(201)
      .json({ status: true, message: "User Registered !!", token: token });

  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Register Controller Error : " + error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Email is not valid :)" });
    }

    if (password.length > 8) {
      return res.status(400).json({
        success: false,
        message: "Please enter strong password (Min 8 characters)",
      });
    }

    const userData = (email, password);

    const saveUserData = await new userModel(userData);
    const user = await saveUserData.save();

    res.status(201).json({ success: true, message: "login successful" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Login controller catch Block : " + error.message,
    });
  }
};

export { login ,register};
