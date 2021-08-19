import { Request, Response } from "express";
import { Container } from "typedi"
import LectureModel from "../models/lecturequery"
import MessageFormat from "../utils/requestFormat";
const { responseFormat } = Container.get(MessageFormat)

export const getListBylectureName = async (req: Request, res: Response): Promise<any> => {

};

export const getListByCategoryName = async (req: Request, res: Response): Promise<any> => {

};

export const getListByAllCategory = async (req: Request, res: Response): Promise<any> => {

};

export const getLectureById = async (req: Request, res: Response): Promise<any> => {

};

export const sortLecturesByTime = async (req: Request, res: Response): Promise<any> => {

};

export const sortLecturesByAttendance = async (req: Request, res: Response): Promise<any> => {

};


export const createLecture = async (req: Request, res: Response): Promise<any> => {

};

export const updateLectureInfo = async (req: Request, res: Response): Promise<any> => {

};

export const openLecture = async (req: Request, res: Response): Promise<any> => {

};

export const deleteLecture = async (req: Request, res: Response): Promise<any> => {

};

export const registerLecture = async (req: Request, res: Response): Promise<any> => {

};