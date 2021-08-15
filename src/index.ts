import express, { Response, Request, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mysql from "mysql";
import dotenv from "dotenv";
import instructorRouter from "./routes/instructor"
import lectureRouter from "./routes/lecture";
import studentRouter from "./routes/student";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true
}))


app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello World!");
})

app.use("/api", instructorRouter);
app.use("/api", lectureRouter);
app.use("/api", studentRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`서버가 ${port}번 포트에서 작동중입니다.`)
})

