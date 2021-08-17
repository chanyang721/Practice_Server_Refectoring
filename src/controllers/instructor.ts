import { Request, Response } from "express";
import { utils } from "../models/studentquery";
import messageFormat from "../utils/errorformat"

export const getListByinstructorName = async (req: Request, res: Response): Promise<any> => {
    console.log("getListByinstructorName")
};
