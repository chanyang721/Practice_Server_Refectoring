import { Request, Response } from "express";
import { Container } from "typedi";
import StudentModel from "../models/studentquery"
import MessageFormat from "../utils/requestFormat";
const { responseFormat } = Container.get(MessageFormat)


export const createStudent = async (req: Request, res: Response) => {
    try{
        const { email } = req.body

        const studentModelInstance = Container.get(StudentModel);

        const { userRecord } = await studentModelInstance.createUser(email)

        if (userRecord) res.status(200).json(responseFormat(200, userRecord));
        else res.status(400).json(responseFormat(400, "중복된 이메일이 존재합니다."))
    }
    catch(err) {
        console.log(err)
    }
};

export const getListByStudentId = async (req: Request, res: Response): Promise<any> => {
    try {
        res.send("getListByStudentId")
    }
    catch (err) {
        console.log(err)
    }
    
};
