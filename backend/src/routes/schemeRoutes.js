import express from "express";
import { getSchemes } from "../controllers/schemeController";

const router = express.Router();

router.post("/recommend", getSchemes);

export default router;
