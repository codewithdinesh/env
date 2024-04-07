import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoutes.js";

import bodyParser from "body-parser";
import { suggestController } from "./controller/suggestController.js";
import { requireSignIn } from "./middlewares/authMiddleware.js";
import { userController } from "./controller/authController.js";


dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
    res.send("API is running");
});

app.post("/api/suggest", requireSignIn, suggestController);

// User details
app.post("/api/user", requireSignIn, userController);



const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
