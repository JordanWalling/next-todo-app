import mongoose from "mongoose";

export const ConnectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://todo-trial:jordansTODO@cluster0.pfsgeso.mongodb.net/todo-app"
  );
  console.log("DB Connected");
};
