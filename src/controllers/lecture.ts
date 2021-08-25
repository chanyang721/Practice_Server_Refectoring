import { Request, Response } from "express";
import { Container } from "typedi"
import LectureModel from "../models/lecturequery"
import MessageFormat from "../utils/requestFormat";
const { responseFormat } = Container.get(MessageFormat)


export const getListBylectureNameOrinstructorName = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name } = req.params;

        const LectureModelInstance = Container.get(LectureModel)

        const { lecturesList } = await LectureModelInstance.getListBylectureNameOrinstructorNameQuery({ name })

        return res.status(200).json(responseFormat(200, "입력된 강의명과 관련된 모든 강의 목록입니다.", lecturesList))
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "입력된 강의명과 관련된 모든 강의 목록을 불러오는데 실패했습니다.", null, err))
    }
}; // 완료

export const getListByCategoryName = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, category } = req.params;

        const LectureModelInstance = Container.get(LectureModel)

        const { lecturesList } = await LectureModelInstance.getListByCategoryNameQuery({ name, category })

        return res.status(200).json(responseFormat(200, "해당 강의명과 카테고리를 정보를 포함한 강의 목록입니다.", lecturesList))
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "해당 강의명과 카테고리를 정보를 포함한 강의 목록을 불러오는데 실패했습니다.", null, err))
    }
}; // 완료

export const getLectureByIdDetail = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;

        const LectureModelInstance = Container.get(LectureModel)
        
        const { lecturesList } = await LectureModelInstance.getLectureByIdDetailQuery({ id })

        return res.status(200).json(responseFormat(200, "모든 강의 목록입니다.", lecturesList))
    }
    catch (err) {
        console.log(err)
    }
}; // 완료

export const sortLecturesByTime = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name } = req.params;

        const LectureModelInstance = Container.get(LectureModel)

        const { lecturesList } = await LectureModelInstance.sortLecturesByTimeQuery({ name })

        return res.status(200).json(responseFormat(200, "수강생수로 정렬된 강의 목록입니다.", lecturesList))
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "수강생수로 정렬된 강의 목록을 불러오는데 실패했습니다.", null, err))
    }
}; // 완료

export const sortLecturesByAttendance = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name } = req.params;

        const LectureModelInstance = Container.get(LectureModel)

        const { lecturesList } = await LectureModelInstance.sortLecturesByAttendanceQuery({ name })

        return res.status(200).json(responseFormat(200, "수강생수로 정렬된 강의 목록입니다.", lecturesList))
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "수강생수로 정렬된 강의 목록을 불러오는데 실패했습니다.", null, err))
    }
}; // 완료

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

        const { queryInfo } = await LectureModelInstance.deleteLectureQuery({ id })

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