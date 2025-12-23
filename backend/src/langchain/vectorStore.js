import { FAISS } from "langchain/vectorstores/faiss";
import { embeddings } from "./embeddings";
import { pool } from "../db";

export async function buildVectorStore() {
  const { rows } = await pool.query("SELECT * FROM schemes"); // {name, description, ...}
  const texts = rows.map((row) => row.description);
  const metadatas = rows.map((row) => ({ ...row }));

  vectorStore = await FAISS.fromTexts(texts, metadatas, embeddings);
  console.log("Vector store built with", rows.length, "schemes");
}
