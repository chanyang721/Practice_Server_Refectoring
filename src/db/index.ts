import mysql from "mysql";
import dotenv from "dotenv";
import config from "../config";
dotenv.config();

const con = mysql.createConnection(
    config["development"]
)

con.connect((err) => {
    if (err) throw err;
    console.log("데이터베이스 연결 완료")
})

export default con

// [process.env.NODE_ENV || "development"]