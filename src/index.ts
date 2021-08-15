import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { instructorRouter, lectureRouter, studentRouter } from "./routes";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true
}))

app.use("/api", instructorRouter);
app.use("/api", lectureRouter);
app.use("/api", studentRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App is running on ${port}`)
})

