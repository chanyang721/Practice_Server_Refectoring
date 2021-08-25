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
exports.registerLecture = exports.deleteLecture = exports.openLecture = exports.updateLectureInfo = exports.createLecture = exports.sortLecturesByAttendance = exports.sortLecturesByTime = exports.getLectureByIdDetail = exports.getListByCategoryName = exports.getListBylectureNameOrinstructorName = void 0;
const typedi_1 = require("typedi");
const lecturequery_1 = __importDefault(require("../models/lecturequery"));
const requestFormat_1 = __importDefault(require("../utils/requestFormat"));
const { responseFormat } = typedi_1.Container.get(requestFormat_1.default);
const getListBylectureNameOrinstructorName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        const { lecturesList } = yield LectureModelInstance.getListBylectureNameOrinstructorNameQuery({ name });
        return res.status(200).json(responseFormat(200, "입력된 강의명과 관련된 모든 강의 목록입니다.", lecturesList));
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "입력된 강의명과 관련된 모든 강의 목록을 불러오는데 실패했습니다.", null, err));
    }
}); // 완료
exports.getListBylectureNameOrinstructorName = getListBylectureNameOrinstructorName;
const getListByCategoryName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, category } = req.params;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        const { lecturesList } = yield LectureModelInstance.getListByCategoryNameQuery({ name, category });
        return res.status(200).json(responseFormat(200, "해당 강의명과 카테고리를 정보를 포함한 강의 목록입니다.", lecturesList));
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "해당 강의명과 카테고리를 정보를 포함한 강의 목록을 불러오는데 실패했습니다.", null, err));
    }
}); // 완료
exports.getListByCategoryName = getListByCategoryName;
const getLectureByIdDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        const { lecturesList } = yield LectureModelInstance.getLectureByIdDetailQuery({ id });
        return res.status(200).json(responseFormat(200, "모든 강의 목록입니다.", lecturesList));
    }
    catch (err) {
        console.log(err);
    }
}); // 완료
exports.getLectureByIdDetail = getLectureByIdDetail;
const sortLecturesByTime = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        const { lecturesList } = yield LectureModelInstance.sortLecturesByTimeQuery({ name });
        return res.status(200).json(responseFormat(200, "수강생수로 정렬된 강의 목록입니다.", lecturesList));
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "수강생수로 정렬된 강의 목록을 불러오는데 실패했습니다.", null, err));
    }
}); // 완료
exports.sortLecturesByTime = sortLecturesByTime;
const sortLecturesByAttendance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        const { lecturesList } = yield LectureModelInstance.sortLecturesByAttendanceQuery({ name });
        return res.status(200).json(responseFormat(200, "수강생수로 정렬된 강의 목록입니다.", lecturesList));
    }
    catch (err) {
        return res.status(400).json(responseFormat(400, "수강생수로 정렬된 강의 목록을 불러오는데 실패했습니다.", null, err));
    }
}); // 완료
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
        const { id } = req.params;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        const { queryInfo } = yield LectureModelInstance.openLectureQuery({ id });
        res.status(200).json(responseFormat(200, "강의 오픈 완료"));
    }
    catch (err) {
        console.log(err);
    }
}); // 완료
exports.openLecture = openLecture;
const deleteLecture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        const { queryInfo } = yield LectureModelInstance.deleteLectureQuery({ id });
        res.status(200).json(responseFormat(200, "강의 삭제 완료"));
    }
    catch (err) {
        console.log(err);
    }
}); // 완료
exports.deleteLecture = deleteLecture;
const registerLecture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { students, nickname, lectureId, studentId } = req.body;
        const LectureModelInstance = typedi_1.Container.get(lecturequery_1.default);
        yield LectureModelInstance.registerLectureQuery({ students, nickname, lectureId, studentId });
        return res.status(200).json(responseFormat(200, "수강 신청이 완료되었습니다."));
    }
    catch (err) {
        console.log(err);
    }
}); // 완료
exports.registerLecture = registerLecture;
