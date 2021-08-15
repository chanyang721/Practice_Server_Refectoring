import mysql from "mysql";
import config from "../config";


const con = mysql.createConnection(
    config["development"]
)

export default con