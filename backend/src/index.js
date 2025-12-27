import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import uploadRoute from "./routes/upload.js";
import queryRoute from "./routes/query.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/upload", uploadRoute);
app.use("/api/query", queryRoute);

app.listen(5000, () => {
  console.log(`🚀 Server running on port 5000`);
});
