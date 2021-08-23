import { Request, Response } from "express";
import { Container } from "typedi";
import InstructorModel from "../models/instructorquery"
import MessageFormat from "../utils/requestFormat";
const { responseFormat } = Container.get(MessageFormat)

export const getListByinstructorName = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name } = req.params;

        const InstructorModelInstance = Container.get(InstructorModel);

        const { lecturesList } = await InstructorModelInstance.getListByName(name)
        
        res.status(200).json(responseFormat(200, "해당 강사의 모든 강의 목록입니다", lecturesList))
    }
    catch (err) {
        console.log(err)
    }
}; // 완료
