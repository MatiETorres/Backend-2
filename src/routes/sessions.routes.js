import { Router } from "express";
import { current } from "../controllers/sessions.controller.js";

const router = Router();

router.get("/current", current);

export default router;
