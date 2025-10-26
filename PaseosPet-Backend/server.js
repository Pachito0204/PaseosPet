import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./src/config/db.js";
import authRoutes from "./src/routes/auth.js";
import petRoutes from "./src/routes/pets.js";
import walkRoutes from "./src/routes/walks.js";
import serviceRoutes from "./src/routes/services.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Ruta base para verificar que el backend está activo
app.get("/", (req, res) => {
  res.send("🐾 PaseosPet Backend funcionando correctamente en Render 🚀");
});

// Rutas principales de la API
app.use("/api/auth", authRoutes);
app.use("/api/pets", petRoutes);
app.use("/api/walks", walkRoutes);
app.use("/api/services", serviceRoutes);

// Puerto
const PORT = process.env.PORT || 10000;

// Conexión con la base de datos y arranque del servidor
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`🚀 PaseosPet Backend corriendo en el puerto ${PORT}`)
    );
  })
  .catch((err) => console.error("❌ Error de conexión a la BD:", err));
