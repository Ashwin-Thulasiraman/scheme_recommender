import { HuggingFaceEmbeddings } from "langchain/embeddings/huggingface";

export const embeddings = new HuggingFaceEmbeddings({
  modelName: "sentence-transformers/all-MiniLM-L6-v2",
});
