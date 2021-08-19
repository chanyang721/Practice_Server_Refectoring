import { Request, Response, NextFunction } from "express";
import { Container } from "typedi"
import Joi from "joi";
import MessageFormat from "../../utils/requestFormat";
const { responseFormat } = Container.get(MessageFormat)

export const createStudentVaildation = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    const schema = Joi.object({
        email: Joi.string().email().trim().max(30).required()
    })

    try {
        await schema.validateAsync(req.body)
        return next();
    }
    catch (err) {
        res.send(responseFormat(400, "유효한 형식이 아닙니다", err))
    }

}