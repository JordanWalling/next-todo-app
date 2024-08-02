import mongoose from "mongoose";

export const ConnectDb = async () => {
  await mongoose.connect(process.env.DB_URL);
  console.log("DB Connected");
};
