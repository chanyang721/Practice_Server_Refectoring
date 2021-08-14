import express, { Response, Request, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mysql from "mysql";
import dotenv from "dotenv";
import instructorRouter from "../routes/instructor"
import lectureRouter from "../routes/lecture";
import studentRouter from "../routes/student";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true
}))

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "lnflearn"
});
connection.connect(() => {
    console.log("데이터베이스 연결 완료")
});

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello World!");
})

app.use("", instructorRouter);
app.use("", lectureRouter);
app.use("", studentRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`서버가 ${port}번 포트에서 작동중입니다.`)
})

