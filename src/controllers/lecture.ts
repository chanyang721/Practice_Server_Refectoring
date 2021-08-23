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

export const getListByCategoryName = async (req: Request, res: Response): Promise<any> => {
    try {
        res.send("getListByCategoryName")
    }
    catch (err) {
        console.log(err)
    }
};

export const getListByAllCategory = async (req: Request, res: Response): Promise<any> => {
    try {
        res.send("getListByAllCategory")
    }
    catch (err) {
        console.log(err)
    }
};

export const getLectureById = async (req: Request, res: Response): Promise<any> => {
    try {
        res.send("getLectureById")
    }
    catch (err) {
        console.log(err)
    }
};

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
        
        const lectureRecord = await LectureModelInstance.makeLecture({ instructor, category, title, description, price })

        if (lectureRecord) res.status(200).json(responseFormat(200, "강의 생성 완료"))
        else res.status(403).json(responseFormat(403, "중복된 강의명이 존재합니다"))
    }
    catch (err) {
        console.log(err)
    }
};

export const updateLectureInfo = async (req: Request, res: Response): Promise<any> => {
    try {
        res.send("updateLectureInfo")
    }
    catch (err) {
        console.log(err)
    }
};

export const openLecture = async (req: Request, res: Response): Promise<any> => {
    try {
        res.send("openLecture")
    }
    catch (err) {
        console.log(err)
    }
};

export const deleteLecture = async (req: Request, res: Response): Promise<any> => {
    try {
        res.send("deleteLecture")
    }
    catch (err) {
        console.log(err)
    }
};

export const registerLecture = async (req: Request, res: Response): Promise<any> => {
    try {
        res.send("registerLecture")
    }
    catch (err) {
        console.log(err)
    }
};