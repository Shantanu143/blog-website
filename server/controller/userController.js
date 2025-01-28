import validator from "validator";
import userModel from "../model/userModel";

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

export { login };
