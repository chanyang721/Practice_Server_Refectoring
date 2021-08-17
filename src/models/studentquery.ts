import { Request, Response, NextFunction } from "express";
import db from "../database";


export const ckeckDuplicUser = (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    let sql = `SELECT * FROM students WHERE email = ?`;
    db.query(sql, [ email ], (error, result) => {
        if (error) res.send(error);
        req.body.DuplicUser = result[0]
        return next();
    })
}

export const utils = {
    students: {
        create: (email: string, callback: Function): void => {
            const nickName = email.split("@")[0];
            
            const sql = `INSERT INTO students (nickname, email, lectures) VALUES (?, ?, ?)`;
            const params = [nickName, email, "{}"]
            db.query(sql, params, (error, result) => {
                if (error) console.log(error);
                callback(error, result);
            })
        },

        getList: () => {

        }
    },


}