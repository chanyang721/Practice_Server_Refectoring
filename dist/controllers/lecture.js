"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerLecture = exports.deleteLecture = exports.openLecture = exports.updateLectureInfo = exports.createLecture = exports.sortLecturesByAttendance = exports.sortLecturesByTime = exports.getLectureById = exports.getListByAllCategory = exports.getListByCategoryName = exports.getListBylectureName = void 0;
const typedi_1 = require("typedi");
const lecturequery_1 = __importDefault(require("../models/lecturequery"));
const requestFormat_1 = __importDefault(require("../utils/requestFormat"));
const { responseFormat } = typedi_1.Container.get(requestFormat_1.default);
const getListBylectureName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send("getListBylectureName");
    }
    catch (err) {
        console.log(err);
    }
});
exports.getListBylectureName = getListBylectureName;
const getListByCategoryName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send("getListByCategoryName");
    }
    catch (err) {
        console.log(err);
    }
});
exports.getListByCategoryName = getListByCategoryName;
const getListByAllCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send("getListByAllCategory");
    }
    catch (err) {
        console.log(err);
    }
});
exports.getListByAllCategory = getListByAllCategory;
const getLectureById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send("getLectureById");
    }
    catch (err) {
        console.log(err);
    }
});
exports.getLectureById = getLectureById;
const sortLecturesByTime = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send("sortLecturesByTime");
    }
    catch (err) {
        console.log(err);
    }
});
exports.sortLecturesByTime = sortLecturesByTime;
const sortLecturesByAttendance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send("sortLecturesByAttendance");
    }
    catch (err) {
        console.log(err);
    }
});
exports.sortLecturesByAttendance = sortLecturesByAttendance;
const createLecture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { instructor, category, title, description, price } = req.body;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        yield LectureModelInstance.createLectureQuery({ instructor, category, title, description, price });
        return res.status(200).json(responseFormat(200, "강의 생성 완료"));
    }
    catch (err) {
        console.log(err);
    }
}); // 완료
exports.createLecture = createLecture;
const updateLectureInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body: { title, description, price }, params: { id } } = req;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        yield LectureModelInstance.updateLectureInfoQuery({ title, description, price, id });
        return res.status(200).json(responseFormat(200, "강의 정보 수정 완료"));
    }
    catch (err) {
        console.log(err);
    }
}); // 완료 
exports.updateLectureInfo = updateLectureInfo;
const openLecture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send("openLecture");
    }
    catch (err) {
        console.log(err);
    }
});
exports.openLecture = openLecture;
const deleteLecture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send("deleteLecture");
    }
    catch (err) {
        console.log(err);
    }
});
exports.deleteLecture = deleteLecture;
const registerLecture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { students, lectureId, studentId } = req.body;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        yield LectureModelInstance.registerLectureQuery({ students, lectureId, studentId });
        return res.status(200).json(responseFormat(200, "수강 신청이 완료되었습니다."));
    }
    catch (err) {
        console.log(err);
    }
}); // 완료
exports.registerLecture = registerLecture;
