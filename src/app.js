import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productsRoutes from "./routes/products.routes.js";
import cartsRoutes from "./routes/carts.routes.js";
import sessionsRoutes from "./routes/sessions.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

// mock user
app.use((req, res, next) => {
  req.user = { email: "test@mail.com", role: "admin" };
  next();
});

//// connectDB();

app.use("/api/products", productsRoutes);
app.use("/api/carts", cartsRoutes);
app.use("/api/sessions", sessionsRoutes);

app.listen(8080, () => console.log("Servidor OK"));
