import { Request, Response } from "express";
import { Container } from "typedi";
import StudentModel from "../models/studentquery"

export const createStudent = async (req: Request, res: Response) => {
    try{
        const { email } = req.body
        const studentModelInstance = Container.get(StudentModel);

        const { userRecord } = await studentModelInstance.createUser(email)

        res.status(200).json({ userRecord })
    }
    catch(err) {
        console.log(err)
        throw new Error("1")
    }
};

export const getListByStudentId = async (req: Request, res: Response): Promise<any> => {

    res.send("getListByStudentId")
};