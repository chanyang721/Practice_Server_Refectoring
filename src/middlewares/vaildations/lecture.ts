import { Request, Response, NextFunction } from "express";
import { Container } from "typedi"
import Joi from "joi";
import MessageFormat from "../../utils/requestFormat";
import db from "../../database"
const { responseFormat } = Container.get(MessageFormat)


export const createLectureVaildation = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    
    const schema = Joi.object({
        instructor: Joi.string().trim().max(30).required(),
        category: Joi.array().items(Joi.string()).max(1).required(),
        title: Joi.string().trim().required(),
        description: Joi.string().trim().required(),
        price: Joi.number().integer().positive().required(),
    })
    
    
    const { value, error } = await schema.validate(req.body)
    if (error) {
        return res.send(responseFormat(403, "유효한 형식이 아닙니다", null, error.details[0].message))
    }
    
    req.body = value
    const { title } = req.body
    
    let sql = `SELECT * FROM lectures WHERE title = ?`;
    let params = [ title ]
    const duplicLecture = await Query(sql, params);
    if (duplicLecture[0]) {
        return res.status(403).json(responseFormat(403, "중복된 강의명이 존재합니다"))
    }
    
    return next();
} // 완료

export const updateLectureInfoVaildation = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const {  } = req.body;

    const schema = Joi.object({
        
    })

    const { value, error } = await schema.validateAsync(req.body)

    return next();
}

export const openLectureVaildation = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const {  } = req.body;

    const schema = Joi.object({

    })

    const { value, error } = await schema.validateAsync(req.body)

    return next();
}

export const deleteLectureVaildation = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const {  } = req.body;

    const schema = Joi.object({

    })

    const { value, error } = await schema.validateAsync(req.body)

    return next();
}

export const registerLectureVaildation = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        
        const schema = Joi.object({
            lectureId: Joi.number().integer().positive().min(1).required(),
            studentId: Joi.number().integer().positive().min(1).required(),
        })
        
        const { value, error } = await schema.validate(req.body)
        if (error) {
            return res.send(responseFormat(403, "유효한 형식이 아닙니다", null, error.details[0].message))
        }
        
        req.body = value
        const { lectureId, studentId } = req.body
    
        let sql = `SELECT * FROM students WHERE id = ?`; 
        let params = [ studentId ]
        const checkStudentExist = await Query(sql, params);
        if (!checkStudentExist[0]) {
            return res.status(400).json(responseFormat(400, "가입된 수강생만 수강 신청할 수 있습니다."));
        };
    

        sql = `SELECT students, open FROM lectures WHERE id = ?`;
        params = [ lectureId ];
        const checkLectureExist = await Query(sql, params);
        if (!checkLectureExist[0]) {
            return res.status(400).json(responseFormat(400, "삭제된 강의는 수강 신청할 수 없습니다."));
        }
        if (!checkLectureExist[0].open) {
            return res.status(400).json(responseFormat(400, "비공개된 강의는 수강 신청할 수 없습니다."));
        }

        const students = JSON.parse(checkLectureExist[0].students)
        if (students[checkStudentExist[0].id]) {
            return res.status(400).json(responseFormat(400, "동일 강의를 수강신청할 수는 없습니다."));
        }
    
        req.body.students = students
        return next();
    }
    catch(err) {
        console.log(err)
    }
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