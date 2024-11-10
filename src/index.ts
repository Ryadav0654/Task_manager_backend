import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import { app } from "./app";
import connectDB from "@/db/index";

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running !`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
