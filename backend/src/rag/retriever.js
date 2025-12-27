import fs from "fs";
import { embedText } from "./gemini.js";

const STORE_PATH = "./vectorstore/index.json";

function cosineSimilarity(a, b) {
  return a.reduce((sum, val, i) => sum + val * b[i], 0);
}

export async function retrieveRelevantChunks(query, topK = 5) {
  const store = JSON.parse(fs.readFileSync(STORE_PATH));
  const queryEmbedding = await embedText(query);

  const scored = store.map(item => ({
    text: item.text,
    score: cosineSimilarity(queryEmbedding, item.embedding)
  }));

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(item => item.text);
}
