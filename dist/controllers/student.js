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
exports.sortStudentLectureListByAttendance = exports.sortStudentLectureListByTime = exports.getListByStudentIdAndCategoryName = exports.getListByStudentId = exports.createStudent = void 0;
const typedi_1 = require("typedi");
const studentquery_1 = __importDefault(require("../models/studentquery"));
const requestFormat_1 = __importDefault(require("../utils/requestFormat"));
const { responseFormat } = typedi_1.Container.get(requestFormat_1.default);
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const studentModelInstance = typedi_1.Container.get(studentquery_1.default);
        yield studentModelInstance.createUserQuery({ email });
        return res.status(201).json(responseFormat(201, "유저 생성 완료"));
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "유서 생성 오류", null, err));
    }
});
exports.createStudent = createStudent;
const getListByStudentId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const studentModelInstance = typedi_1.Container.get(studentquery_1.default);
        const { lecturesList } = yield studentModelInstance.getLectureListsQuery({ id });
        return res.status(200).json(responseFormat(200, "해당 학생의 모든 강의 목록입니다.", lecturesList));
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "학생의 강의 목록을 불러오는데 실패했습니다.", null, err));
    }
});
exports.getListByStudentId = getListByStudentId;
const getListByStudentIdAndCategoryName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, category } = req.params;
        const studentModelInstance = typedi_1.Container.get(studentquery_1.default);
        const { lecturesList } = yield studentModelInstance.getLectureListsWithCategoryNameQuery({ id, category });
        return res.status(200).json(responseFormat(200, "입력된 카테고리를 가진 해당 학생의 강의 목록입니다.", lecturesList));
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "입력된 카테고리를 가진 해당 학생의 강의 목록을 불러오는데 실패했습니다.", null, err));
    }
});
exports.getListByStudentIdAndCategoryName = getListByStudentIdAndCategoryName;
const sortStudentLectureListByTime = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const studentModelInstance = typedi_1.Container.get(studentquery_1.default);
        const { lecturesList } = yield studentModelInstance.sortStudentByTimeQuery({ id });
        return res.status(200).json(responseFormat(200, "최신순으로 정렬된 강의 목록입니다.", lecturesList));
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "최신순으로 정렬된 강의 목록을 불러오는데 실패했습니다.", null, err));
    }
});
exports.sortStudentLectureListByTime = sortStudentLectureListByTime;
const sortStudentLectureListByAttendance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const studentModelInstance = typedi_1.Container.get(studentquery_1.default);
        const { lecturesList } = yield studentModelInstance.sortStudentByAttendanceQuery({ id });
        return res.status(200).json(responseFormat(200, "수강생수가 많은 순서대로 정렬된 강의 목록입니다.", lecturesList));
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "수강생수가 많은 순서대로 정렬된 강의 목록을 불러오는데 실패했습니다.", null, err));
    }
});
exports.sortStudentLectureListByAttendance = sortStudentLectureListByAttendance;
