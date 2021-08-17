import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import db from "../../database";
import { Iinstructor, Ilecture, Istudent } from "../../interfaces"


export const createLectureVaildation = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const {  } = req.body;

    const schema = Joi.object({

    })

    const { value, error } = await schema.validateAsync(req.body)

    return next();
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

