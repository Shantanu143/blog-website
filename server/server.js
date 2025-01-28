import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
import userRoutes from "./routes/userRoutes.js";

// env config
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4001;

// database connection
connectDb();

// routes
app.use("/user", userRoutes);

// test route
app.get("/", (req, res) => {
  res.send("This api is working");
});

app.listen(PORT, () => console.log(`Server is running on the PORT : ${PORT}`));
