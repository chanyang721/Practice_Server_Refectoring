import { Request, Response } from "express";
import { utils } from "../models/studentquery";
import messageFormat from "../utils/errorformat"

export const createStudent = async (req: Request, res: Response): Promise<any> => {
    const { DuplicUser, email } = req.body

    if (!DuplicUser) {
        utils.students.create(email, (error: Error, result: any) => {
            if (error) res.status(400).json(messageFormat(400, "생성 오류 발생", error));
            else res.status(201).json(messageFormat(201, "생성 완료"));
        })
    }
    else {
        res.status(400).json(messageFormat(400, "중복된 이메일이 존재합니다."))
    }
};

export const getListByStudentId = async (req: Request, res: Response): Promise<any> => {
    res.send("getListByStudentId")
};