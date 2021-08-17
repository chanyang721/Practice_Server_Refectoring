import { Request, Response } from "express";
import db from "../database";

export const createStudent = async (req: Request, res: Response): Promise<any> => {
    res.send("createStudent")
};

export const getListByStudentId = async (req: Request, res: Response): Promise<any> => {
    res.send("getListByStudentId")
};