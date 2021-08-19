import { Request, Response } from "express";
import { Container } from "typedi";
import StudentModel from "../models/studentquery"

export const createStudent = async (req: Request, res: Response) => {
    try{
        const { email } = req.body
        const studentModelInstance = Container.get(StudentModel);

        const { userRecord } = await studentModelInstance.createUser(email)

        if (userRecord) res.status(200).json({ userRecord });
        else res.status(400).json({ message: "중복된 이메일이 존재합니다." })
    }
    catch(err) {
        console.log(err)
    }
};

export const getListByStudentId = async (req: Request, res: Response): Promise<any> => {

    res.send("getListByStudentId")
};