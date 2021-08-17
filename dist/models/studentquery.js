"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = exports.ckeckDuplicUser = void 0;
const database_1 = __importDefault(require("../database"));
const ckeckDuplicUser = (req, res, next) => {
    const { email } = req.body;
    let sql = `SELECT * FROM students WHERE email = ?`;
    database_1.default.query(sql, [email], (error, result) => {
        if (error)
            res.send(error);
        req.body.DuplicUser = result[0];
        return next();
    });
};
exports.ckeckDuplicUser = ckeckDuplicUser;
exports.utils = {
    students: {
        create: (email, callback) => {
            const nickName = email.split("@")[0];
            const sql = `INSERT INTO students (nickname, email, lectures) VALUES (?, ?, ?)`;
            const params = [nickName, email, "{}"];
            database_1.default.query(sql, params, (error, result) => {
                if (error)
                    console.log(error);
                callback(error, result);
            });
        },
        getList: () => {
        }
    },
};
