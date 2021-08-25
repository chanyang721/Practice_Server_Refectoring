import { Request, Response } from "express";
import { Container } from "typedi"
import LectureModel from "../models/lecturequery"
import MessageFormat from "../utils/requestFormat";
const { responseFormat } = Container.get(MessageFormat)

export const getListBylectureName = async (req: Request, res: Response): Promise<any> => {
    try {
        res.send("getListBylectureName")
    }
    catch (err) {
        console.log(err)
    }
};

export const getListByIdAllCategory = async (req: Request, res: Response): Promise<any> => {
    try {
        res.send("getListByAllCategory")
    }
    catch (err) {
        console.log(err)
    }
};

export const getListByCategoryName = async (req: Request, res: Response): Promise<any> => {
    try {
        res.send("getListByCategoryName")
    }
    catch (err) {
        console.log(err)
    }
};

export const getLectureByIdDetails = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;

        const LectureModelInstance = Container.get(LectureModel)
        
        const { lecturesInfo } = await LectureModelInstance.getLectureByIdDetailsQuery({ id })

        return res.status(200).json(responseFormat(200, "오픈 여부를 제거한 모든 강의 목록입니다.", lecturesInfo))
    }
    catch (err) {
        console.log(err)
    }
}; // 완료

export const sortLecturesByTime = async (req: Request, res: Response): Promise<any> => {
    try {
        res.send("sortLecturesByTime")
    }
    catch (err) {
        console.log(err)
    }
};

export const sortLecturesByAttendance = async (req: Request, res: Response): Promise<any> => {
    try {
        res.send("sortLecturesByAttendance")
    }
    catch (err) {
        console.log(err)
    }
};

export const createLecture = async (req: Request, res: Response): Promise<any> => {
    try {
        const { instructor, category, title, description, price } = req.body;

        const LectureModelInstance = Container.get(LectureModel)
        
        await LectureModelInstance.createLectureQuery({ instructor, category, title, description, price })

        return res.status(200).json(responseFormat(200, "강의 생성 완료"))
    }
    catch (err) {
        console.log(err)
    }
}; // 완료

export const updateLectureInfo = async (req: Request, res: Response): Promise<any> => {
    try {
        const { body: { title, description, price }, params: { id } } = req;

        const LectureModelInstance = Container.get(LectureModel);

        await LectureModelInstance.updateLectureInfoQuery({ title, description, price, id })

        return res.status(200).json(responseFormat(200, "강의 정보 수정 완료"))
    }
    catch (err) {
        console.log(err)
    }
}; // 완료 

export const openLecture = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;

        const LectureModelInstance = Container.get(LectureModel);

        const { queryInfo } = await LectureModelInstance.openLectureQuery({ id })

        res.status(200).json(responseFormat(200, "강의 오픈 완료"))
    }
    catch (err) {
        console.log(err)
    }
}; // 완료

export const deleteLecture = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;

        const LectureModelInstance = Container.get(LectureModel);

        const { queryInfo } = await LectureModelInstance.deleteLecureQuery({ id })

        res.status(200).json(responseFormat(200, "강의 삭제 완료"))
    }
    catch (err) {
        console.log(err)
    }
}; // 완료

export const registerLecture = async (req: Request, res: Response): Promise<any> => {
    try {
        const { students, nickname, lectureId, studentId } = req.body;

        const LectureModelInstance = Container.get(LectureModel);

        await LectureModelInstance.registerLectureQuery({ students, nickname, lectureId, studentId })

        return res.status(200).json(responseFormat(200, "수강 신청이 완료되었습니다."))
    }
    catch (err) {
        console.log(err)
    }
}; // 완료