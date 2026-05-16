import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./src/routes/auth.routes.js";
import clientProfileRoutes from "./src/routes/clientProfile.routes.js";
import agencyProfileRoutes from "./src/routes/agencyProfile.routes.js";
import matchRoutes from "./src/routes/match.routes.js";
import userRoutes from "./src/routes/user.routes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ message: "MT7 backend running 🚀" });
});

app.use("/api/auth", authRoutes);
app.use("/api/client-profile", clientProfileRoutes);
app.use("/api/agency-profile", agencyProfileRoutes);
app.use("/api/match", matchRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
