import { Request, Response } from "express";
import { Container } from "typedi"
import LectureModel from "../Service/lecturequery"
import MessageFormat from "../utils/requestFormat";
const { responseFormat } = Container.get(MessageFormat)


export const getListBylectureTitleOrinstructorName = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name } = req.params;

        const LectureModelInstance = Container.get(LectureModel)

        const { lecturesList } = await LectureModelInstance.getListBylectureTitleOrinstructorNameQuery({ name })

        return res.status(200).json(responseFormat(200, "입력된 강의명 혹은 강사명과 관련된 모든 강의 목록입니다.", lecturesList))
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "입력된 강의명 혹은 강사명과 관련된 모든 강의 목록을 불러오는데 실패했습니다.", null, err))
    }
}; 

export const getListAddConditionCategoryName = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, category } = req.params;

        const LectureModelInstance = Container.get(LectureModel)

        const { lecturesList } = await LectureModelInstance.getListAddConditionCategoryNameQuery({ name, category })

        return res.status(200).json(responseFormat(200, "해당 강의명 혹은 강사명과 입력된 카테고리를 정보를 포함한 강의 목록입니다.", lecturesList))
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "해당 강의명 혹은 강사명과 입력된 카테고리를 정보를 포함한 강의 목록을 불러오는데 실패했습니다.", null, err))
    }
}; 

export const getLectureByIdDetail = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;

        const LectureModelInstance = Container.get(LectureModel)
        
        const { lecturesList } = await LectureModelInstance.getLectureByIdDetailQuery({ id })

        return res.status(200).json(responseFormat(200, "오픈되지 않은 강의를 포함한 모든 강의 목록입니다.", lecturesList))
    }
    catch (err) {
        console.log(err)
    }
}; 

export const sortLecturesByTime = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name } = req.params;

        const LectureModelInstance = Container.get(LectureModel)

        const { lecturesList } = await LectureModelInstance.sortLecturesByTimeQuery({ name })

        return res.status(200).json(responseFormat(200, "최신순으로 정렬된 강의 목록입니다.", lecturesList))
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "최신순으로 정렬된 강의 목록을 불러오는데 실패했습니다.", null, err))
    }
}; 

export const sortLecturesByAttendance = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name } = req.params;

        const LectureModelInstance = Container.get(LectureModel)

        const { lecturesList } = await LectureModelInstance.sortLecturesByAttendanceQuery({ name })

        return res.status(200).json(responseFormat(200, "수강생수가 많은 순서대로 정렬된 강의 목록입니다.", lecturesList))
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "수강생수가 많은 순서대로 정렬된 강의 목록을 불러오는데 실패했습니다.", null, err))
    }
}; 

export const createLecture = async (req: Request, res: Response): Promise<any> => {
    try {
        const { instructor, category, title, description, price } = req.body;

        const LectureModelInstance = Container.get(LectureModel)
        
        await LectureModelInstance.createLectureQuery({ instructor, category, title, description, price })

        return res.status(201).json(responseFormat(201, "강의 생성 완료"))
    }
    catch (err) {
        console.log(err)
    }
}; 

export const updateLectureInfo = async (req: Request, res: Response): Promise<any> => {
    try {
        const { body: { title, description, price }, params: { id } } = req;

        const LectureModelInstance = Container.get(LectureModel);

        await LectureModelInstance.updateLectureInfoQuery({ title, description, price, id })

        return res.status(201).json(responseFormat(201, "강의 정보 수정 완료"))
    }
    catch (err) {
        console.log(err)
    }
};  

export const openLecture = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;

        const LectureModelInstance = Container.get(LectureModel);

        await LectureModelInstance.openLectureQuery({ id })

        res.status(201).json(responseFormat(201, "강의 오픈 완료"))
    }
    catch (err) {
        console.log(err)
    }
}; 

export const deleteLecture = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;

        const LectureModelInstance = Container.get(LectureModel);

        await LectureModelInstance.deleteLectureQuery({ id })

        res.status(200).json(responseFormat(200, "강의 삭제 완료"))
    }
    catch (err) {
        console.log(err)
    }
}; 

export const registerLecture = async (req: Request, res: Response): Promise<any> => {
    try {
        const { students, nickname, lectureId, studentId } = req.body;

        const LectureModelInstance = Container.get(LectureModel);

        await LectureModelInstance.registerLectureQuery({ students, nickname, lectureId, studentId })

        return res.status(201).json(responseFormat(201, "수강 신청 완료"))
    }
    catch (err) {
        console.log(err)
    }
}; 