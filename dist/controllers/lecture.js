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
exports.registerLecture = exports.deleteLecture = exports.openLecture = exports.updateLectureInfo = exports.createLecture = exports.sortLecturesByAttendance = exports.sortLecturesByTime = exports.getLectureByIdDetail = exports.getListAddConditionCategoryName = exports.getListBylectureTitleOrinstructorName = void 0;
const typedi_1 = require("typedi");
const lecturequery_1 = __importDefault(require("../models/lecturequery"));
const requestFormat_1 = __importDefault(require("../utils/requestFormat"));
const { responseFormat } = typedi_1.Container.get(requestFormat_1.default);
const getListBylectureTitleOrinstructorName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        const { lecturesList } = yield LectureModelInstance.getListBylectureTitleOrinstructorNameQuery({ name });
        return res.status(200).json(responseFormat(200, "입력된 강의명 혹은 강사명과 관련된 모든 강의 목록입니다.", lecturesList));
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "입력된 강의명 혹은 강사명과 관련된 모든 강의 목록을 불러오는데 실패했습니다.", null, err));
    }
});
exports.getListBylectureTitleOrinstructorName = getListBylectureTitleOrinstructorName;
const getListAddConditionCategoryName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, category } = req.params;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        const { lecturesList } = yield LectureModelInstance.getListAddConditionCategoryNameQuery({ name, category });
        return res.status(200).json(responseFormat(200, "해당 강의명 혹은 강사명과 입력된 카테고리를 정보를 포함한 강의 목록입니다.", lecturesList));
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "해당 강의명 혹은 강사명과 입력된 카테고리를 정보를 포함한 강의 목록을 불러오는데 실패했습니다.", null, err));
    }
});
exports.getListAddConditionCategoryName = getListAddConditionCategoryName;
const getLectureByIdDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        const { lecturesList } = yield LectureModelInstance.getLectureByIdDetailQuery({ id });
        return res.status(200).json(responseFormat(200, "오픈되지 않은 강의를 포함한 모든 강의 목록입니다.", lecturesList));
    }
    catch (err) {
        console.log(err);
    }
});
exports.getLectureByIdDetail = getLectureByIdDetail;
const sortLecturesByTime = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        const { lecturesList } = yield LectureModelInstance.sortLecturesByTimeQuery({ name });
        return res.status(200).json(responseFormat(200, "최신순으로 정렬된 강의 목록입니다.", lecturesList));
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "최신순으로 정렬된 강의 목록을 불러오는데 실패했습니다.", null, err));
    }
});
exports.sortLecturesByTime = sortLecturesByTime;
const sortLecturesByAttendance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        const { lecturesList } = yield LectureModelInstance.sortLecturesByAttendanceQuery({ name });
        return res.status(200).json(responseFormat(200, "수강생수가 많은 순서대로 정렬된 강의 목록입니다.", lecturesList));
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "수강생수가 많은 순서대로 정렬된 강의 목록을 불러오는데 실패했습니다.", null, err));
    }
});
exports.sortLecturesByAttendance = sortLecturesByAttendance;
const createLecture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { instructor, category, title, description, price } = req.body;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        yield LectureModelInstance.createLectureQuery({ instructor, category, title, description, price });
        return res.status(201).json(responseFormat(201, "강의 생성 완료"));
    }
    catch (err) {
        console.log(err);
    }
});
exports.createLecture = createLecture;
const updateLectureInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body: { title, description, price }, params: { id } } = req;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        yield LectureModelInstance.updateLectureInfoQuery({ title, description, price, id });
        return res.status(201).json(responseFormat(201, "강의 정보 수정 완료"));
    }
    catch (err) {
        console.log(err);
    }
});
exports.updateLectureInfo = updateLectureInfo;
const openLecture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        yield LectureModelInstance.openLectureQuery({ id });
        res.status(201).json(responseFormat(201, "강의 오픈 완료"));
    }
    catch (err) {
        console.log(err);
    }
});
exports.openLecture = openLecture;
const deleteLecture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        yield LectureModelInstance.deleteLectureQuery({ id });
        res.status(200).json(responseFormat(200, "강의 삭제 완료"));
    }
    catch (err) {
        console.log(err);
    }
});
exports.deleteLecture = deleteLecture;
const registerLecture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { students, nickname, lectureId, studentId } = req.body;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        yield LectureModelInstance.registerLectureQuery({ students, nickname, lectureId, studentId });
        return res.status(201).json(responseFormat(201, "수강 신청 완료"));
    }
    catch (err) {
        console.log(err);
    }
});
exports.registerLecture = registerLecture;
