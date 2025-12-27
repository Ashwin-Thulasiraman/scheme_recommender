import express from "express";
import { retrieveRelevantChunks } from "../rag/retriever.js";
import { generateAnswer } from "../rag/gemini.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { userMessage } = req.body;

    const relevantSchemes = await retrieveRelevantChunks(userMessage);

    const prompt = `
You are a government scheme recommendation system.

User profile:
"${userMessage}"

Below are relevant scheme descriptions:
${relevantSchemes.join("\n---\n")}

Task:
- Suggest the MOST SUITABLE schemes for the user
- Return them as a list
- Mention eligibility briefly
- Do NOT invent schemes
`;

    const answer = await generateAnswer(prompt);

    res.json({ suggestions: answer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
