import { Request, Response, NextFunction } from "express";
import { Container } from "typedi"
import Joi from "joi";
import MessageFormat from "../../utils/requestFormat";
const { responseFormat } = Container.get(MessageFormat)


export const createLectureVaildation = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    const schema = Joi.object({
        instructor: Joi.string().max(30).trim().required(), // 강사 테이블 접근할 데이터
        category: Joi.array().items(Joi.string()).max(1).required(), // 최대 1개만 있어야 한다.
        title: Joi.string().trim().required(),
        description: Joi.string().trim().required(),
        price: Joi.number().integer().positive().required(),
    })

    try{
        await schema.validateAsync(req.body)
        return next();
    }
    catch(err) {
        res.send(responseFormat(400, "유효한 형식이 아닙니다", null, err.details[0].message))
    }
}

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
    const {  } = req.body;

    const schema = Joi.object({

    })

    const { value, error } = await schema.validateAsync(req.body)

    return next();
}

