import mysql from "mysql";
import config from "../config";


const con = mysql.createConnection(
    config["development"]
)

con.connect((err) => {
    if (err) throw err;
});

export default con