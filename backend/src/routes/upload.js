import express from "express";
import multer from "multer";
import { loadPdfText } from "../utils/pdfLoader.js";
import { splitText } from "../utils/textSplitter.js";
import { ingestChunks } from "../rag/ingest.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    const text = await loadPdfText(req.file.path);
    const chunks = splitText(text);
    await ingestChunks(chunks);

    res.json({ message: "Schemes document processed successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
