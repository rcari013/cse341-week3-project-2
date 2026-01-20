import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectDB } from "./data/connect.js";

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
  }
};

startServer();
