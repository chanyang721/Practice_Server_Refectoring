import mysql from "mysql";
import dotenv from "dotenv";
import config from "../config";
dotenv.config();

const con = mysql.createConnection(
    config["development"]
)

export default con

// [process.env.NODE_ENV || "development"]