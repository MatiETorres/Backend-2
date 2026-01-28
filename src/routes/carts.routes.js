import { Router } from "express";
import passport from "passport";
import { authorize } from "../middlewares/roles.js";
const router = Router();

router.post("/:cid/product/:pid", authorize("user"),
  passport.authenticate("jwt", { session: false }),
  authorize("user"),
  (req, res) => res.json({ message: "Producto agregado al carrito" })
);

export default router;