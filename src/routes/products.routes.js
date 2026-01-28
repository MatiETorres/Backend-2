import { Router } from "express";
import { getProducts, createProduct } from "../controllers/products.controller.js";
import { authorize } from "../middlewares/roles.js";

const router = Router();

router.get("/", getProducts);
router.post("/", authorize("admin"), createProduct);

export default router;
