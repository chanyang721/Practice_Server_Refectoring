import { Request, Response, NextFunction } from "express";
import messageFormat from "../../utils/errorformat";
import Joi from "joi";

export const createStudentVaildation = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    
    const schema = Joi.object({
        email: Joi.string().email().trim().max(30).required()
    })

    try {
        await schema.validateAsync(req.body)
        console.log("유효성 통과")
        return next();
    }
    catch (err) {
        res.send(messageFormat(400, "유효한 형식이 아닙니다", err.details[0].message))
    }
}