import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { buildVectorStore } from "./langchain/vectorStore";

dotenv.config();       

const app = express();
app.use(cors());
app.use(express.json());


buildVectorStore().then(() => {
  app.listen(5000, () => console.log(`Server running on http://localhost:5000`));
});

export default app;