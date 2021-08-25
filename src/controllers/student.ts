import { Request, Response } from "express";
import { Container } from "typedi";
import StudentModel from "../models/studentquery"
import MessageFormat from "../utils/requestFormat";
const { responseFormat } = Container.get(MessageFormat)


export const createStudent = async (req: Request, res: Response): Promise<any> => {
    try{
        const { email } = req.body

        const studentModelInstance = Container.get(StudentModel);

        await studentModelInstance.createUserQuery({ email })

        return res.status(200).json(responseFormat(200, "유저 생성 완료"));
    }
    catch(err) {
        return res.status(400).json(responseFormat(400, "유서 생성 오류", null, err));
    }
}; // 완료

export const getListByStudentId = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;

        const studentModelInstance = Container.get(StudentModel);

        const { lecturesList } = await studentModelInstance.getLectureListsQuery({ id })

        return res.status(200).json(responseFormat(200, "해당 학생의 모든 강의 목록입니다.", lecturesList))
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "학생의 강의 목록을 불러오는데 실패했습니다.", null, err))
    }
}; // 완료

export const getListByStudentIdAndCategoryName = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id, name } = req.params;

        const studentModelInstance = Container.get(StudentModel);

        const { lecturesList } = await studentModelInstance.getLectureListsWithCategoryNameQuery({ id, name })

        return res.status(200).json(responseFormat(200, "해당 학생의 카테고리 목록입니다.", lecturesList))
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "학생의 강의 목록을 불러오는데 실패했습니다.", null, err))
    }
}; // 완료

export const sortStudentLectureListByTime = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;

        const studentModelInstance = Container.get(StudentModel);

        const { lecturesList } = await studentModelInstance.sortStudentByTimeQuery({ id })

        return res.status(200).json(responseFormat(200, "최신 순으로 정렬된 강의 목록입니다.", lecturesList))
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "최신순으로 정렬된 강의 목록을 불러오는데 실패했습니다.", null, err))
    }
}; // 완료

export const sortStudentLectureListByAttendance = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;

        const studentModelInstance = Container.get(StudentModel);

        const { lecturesList } = await studentModelInstance.sortStudentByAttendanceQuery({ id })

        return res.status(200).json(responseFormat(200, "수강생수로 정렬된 강의 목록입니다.", lecturesList))
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "수강생수로 정렬된 강의 목록을 불러오는데 실패했습니다.", null, err))
    }
}; // 완료
