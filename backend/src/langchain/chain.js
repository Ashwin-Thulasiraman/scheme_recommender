import { GPT4All } from "langchain/llms/gpt4all";
import { RetrievalQAChain } from "langchain/chains";
import { vectorStore } from "./vectorStore";


export const llm = new GPT4All({
  model: "ggml-gpt4all-j-v1.3-groovy.bin", //need to fix this 
  backend: "gptj",
  verbose: true,
});

export const qaChain = new RetrievalQAChain({
  retriever: vectorStore.asRetriever(5),
  llm,
  returnSourceDocuments: true,
});
