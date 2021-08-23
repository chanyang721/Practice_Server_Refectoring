import { Request, Response, NextFunction } from "express";
import { Container } from "typedi"
import Joi from "joi";
import MessageFormat from "../../utils/requestFormat";
import db from "../../database"
const { responseFormat } = Container.get(MessageFormat)

export const createStudentVaildation = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    const schema = Joi.object({
        email: Joi.string().email().trim().max(30).required()
    })

    const { value, error } = await schema.validate(req.body)
    if (error) {
        return res.status(400).json(responseFormat(400, "유효한 형식이 아닙니다.", null, error))
    }

    req.body = value;
    const { email } = req.body

    let sql = `SELECT * FROM students WHERE email = ?`;
    let params = [ email ];
    const DuplicStudent = await Query(sql, params);
    if (DuplicStudent[0]) {
        return res.status(400).json(responseFormat(400, "중복된 이메일이 존재합니다."));
    }

    return next();
} // 완료 

const Query = (sql, params?) => {
    return new Promise((resolve, reject) =>{
        db.query(sql, params, (err, result) => {
            if (err)
                return reject(err);
            resolve(result);
        });
    });
}