import fs from "fs";
import { embedText } from "./gemini.js";

const STORE_PATH = "./vectorstore/index.json";
const STORE_DIR = "./vectorstore";
if (!fs.existsSync(STORE_DIR)) {
    fs.mkdirSync(STORE_DIR, { recursive: true });
}

export async function ingestChunks(chunks) {
  const vectors = [];

  for (const chunk of chunks) {
    const embedding = await embedText(chunk);
    vectors.push({ embedding, text: chunk });
  }

  fs.writeFileSync(STORE_PATH, JSON.stringify(vectors, null, 2));
}
