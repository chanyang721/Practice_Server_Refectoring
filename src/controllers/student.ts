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

        return res.status(201).json(responseFormat(201, "유저 생성 완료"));
    }
    catch(err) {
        return res.status(400).json(responseFormat(400, "유서 생성 오류", null, err));
    }
};

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
};

export const getListByStudentIdAndCategoryName = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id, category } = req.params;

        const studentModelInstance = Container.get(StudentModel);

        const { lecturesList } = await studentModelInstance.getLectureListsWithCategoryNameQuery({ id, category })

        return res.status(200).json(responseFormat(200, "입력된 카테고리를 가진 해당 학생의 강의 목록입니다.", lecturesList))
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "입력된 카테고리를 가진 해당 학생의 강의 목록을 불러오는데 실패했습니다.", null, err))
    }
};

export const sortStudentLectureListByTime = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;

        const studentModelInstance = Container.get(StudentModel);

        const { lecturesList } = await studentModelInstance.sortStudentByTimeQuery({ id })

        return res.status(200).json(responseFormat(200, "해당 수강생의 강의들을 최신순으로 정렬한 강의 목록입니다.", lecturesList))
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "해당 수강생의 강의들을 최신순으로 정렬한 강의 목록을 불러오는데 실패했습니다.", null, err))
    }
};

export const sortStudentLectureListByAttendance = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;

        const studentModelInstance = Container.get(StudentModel);

        const { lecturesList } = await studentModelInstance.sortStudentByAttendanceQuery({ id })

        return res.status(200).json(responseFormat(200, "수강생수가 많은 순서대로 정렬된 강의 목록입니다.", lecturesList))
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "수강생수가 많은 순서대로 정렬된 강의 목록을 불러오는데 실패했습니다.", null, err))
    }
};
