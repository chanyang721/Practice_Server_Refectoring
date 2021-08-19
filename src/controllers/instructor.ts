import { Request, Response } from "express";
import { Container } from "typedi";
import InstructorModel from "../models/instructorquery"
import MessageFormat from "../utils/requestFormat";
const { responseFormat } = Container.get(MessageFormat)

export const getListByinstructorName = async (req: Request, res: Response): Promise<any> => {


    console.log("getListByinstructorName")
};
