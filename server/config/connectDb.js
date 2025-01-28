import mongoose from "mongoose";
const connectDb = async () => {
  try {
    await mongoose.connection.on("connected", () =>
      console.log("MongoDb connected ")
    );
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
