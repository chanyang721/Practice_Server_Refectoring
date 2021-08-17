import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const createStudentVaildation = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { email } = req.body;

    const schema = Joi.object({
        email: Joi.string().email().trim().required()
    })

    try {
        await schema.validateAsync(req.body)
        return next();
    }
    catch (err) {
        res.send(err)
    }
}