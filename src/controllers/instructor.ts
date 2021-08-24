import { Request, Response } from "express";
import { Container } from "typedi";
import InstructorModel from "../models/instructorquery"
import MessageFormat from "../utils/requestFormat";
const { responseFormat } = Container.get(MessageFormat)

export const getListByinstructorName = async (req: Request, res: Response): Promise<any> => {
    try {
        const { Name } = req.params;

        const InstructorModelInstance = Container.get(InstructorModel);

        const { lecturesList } = await InstructorModelInstance.getListByNameQuery(Name)
        
        res.status(200).json(responseFormat(200, "해당 강사의 모든 강의 목록입니다", lecturesList))
    }
    catch (err) {
        console.log(err)
    }
}; // 완료

export const getListByInstructorNameAndCategoryName = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, category } = req.params;

        const InstructorModelInstance = Container.get(InstructorModel);

        const { lecturesList } = await InstructorModelInstance.getListByInstructorNameAndCategoryNameQuery({ name, category })
        
        res.status(200).json(responseFormat(200, "해당 강사의 입력한 카테고리 강의 목록입니다", lecturesList))
    }
    catch (err) {
        console.log(err)
    }
}; 

export const sortInstructorLectureListByTime = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name } = req.params;

        const InstructorModelInstance = Container.get(InstructorModel);

        const { sortList } = await InstructorModelInstance.sortInstructorLectureListByTimeQuery(name)
        
        res.status(200).json(responseFormat(200, "최신 순으로 정렬된 해당 강사의 강의 목록입니다.", sortList))
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "최신순으로 정렬된 해당 강사의 강의 목록을 불러오는데 실패했습니다.", null, err))
    }
}; 

export const sortInstructorLectureListByAttendance = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name } = req.params;

        const InstructorModelInstance = Container.get(InstructorModel);

        const { sortList } = await InstructorModelInstance.sortInstructorLectureListByAttendanceQuery(name)
        
        res.status(200).json(responseFormat(200, "수강생수로 정렬된 해당 강사의 강의 목록입니다.", sortList))
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "수강생수로 정렬된 해당 강사의 강의 목록을 불러오는데 실패했습니다.", null, err))
    }
}; 




