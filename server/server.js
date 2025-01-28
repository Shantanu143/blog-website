import express from "express";

import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4001;

app.get("/", (req, res) => {
  res.send("This api is working");
});

app.listen(PORT, () => console.log(`Server is running on the PORT : ${PORT}`));
