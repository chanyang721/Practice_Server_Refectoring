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
exports.registerLectureVaildation = exports.deleteLectureVaildation = exports.openLectureVaildation = exports.updateLectureInfoVaildation = exports.createLectureVaildation = void 0;
const typedi_1 = require("typedi");
const joi_1 = __importDefault(require("joi"));
const requestFormat_1 = __importDefault(require("../../utils/requestFormat"));
const database_1 = __importDefault(require("../../database"));
const { responseFormat } = typedi_1.Container.get(requestFormat_1.default);
const createLectureVaildation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = joi_1.default.object({
        instructor: joi_1.default.string().trim().max(30).required(),
        category: joi_1.default.array().items(joi_1.default.string()).max(1).required(),
        title: joi_1.default.string().trim().required(),
        description: joi_1.default.string().trim().required(),
        price: joi_1.default.number().integer().positive().required(),
    });
    const { value, error } = yield schema.validate(req.body);
    if (error) {
        return res.send(responseFormat(403, "유효한 형식이 아닙니다", null, error.details[0].message));
    }
    req.body = value;
    const { title } = req.body;
    let sql = `SELECT * FROM lectures WHERE title = ?`;
    let params = [title];
    const duplicLecture = yield Query(sql, params);
    if (duplicLecture[0]) {
        return res.status(403).json(responseFormat(403, "중복된 강의명이 존재합니다"));
    }
    return next();
}); // 완료
exports.createLectureVaildation = createLectureVaildation;
const updateLectureInfoVaildation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const {} = req.body;
    const schema = joi_1.default.object({
        title: joi_1.default.string().trim().required(),
        description: joi_1.default.string().trim().required(),
        price: joi_1.default.number().integer().positive().required(),
    });
    const { value, error } = yield schema.validateAsync(req.body);
    if (error) {
        return res.status(400).json(responseFormat(400, "유효한 형식이 아닙니다.", null, error.details[0].message));
    }
    req.body = value;
    return next();
});
exports.updateLectureInfoVaildation = updateLectureInfoVaildation;
const openLectureVaildation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const {} = req.body;
    const schema = joi_1.default.object({});
    const { value, error } = yield schema.validateAsync(req.body);
    return next();
});
exports.openLectureVaildation = openLectureVaildation;
const deleteLectureVaildation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const {} = req.body;
    const schema = joi_1.default.object({});
    const { value, error } = yield schema.validateAsync(req.body);
    return next();
});
exports.deleteLectureVaildation = deleteLectureVaildation;
const registerLectureVaildation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const schema = joi_1.default.object({
            lectureId: joi_1.default.number().integer().positive().min(1).required(),
            studentId: joi_1.default.number().integer().positive().min(1).required(),
        });
        const { value, error } = yield schema.validate(req.body);
        if (error) {
            return res.send(responseFormat(403, "유효한 형식이 아닙니다", null, error.details[0].message));
        }
        req.body = value;
        const { lectureId, studentId } = req.body;
        let sql = `SELECT * FROM students WHERE id = ?`;
        let params = [studentId];
        const checkStudentExist = yield Query(sql, params);
        if (!checkStudentExist[0]) {
            return res.status(400).json(responseFormat(400, "가입된 수강생만 수강 신청할 수 있습니다."));
        }
        ;
        sql = `SELECT students, open FROM lectures WHERE id = ?`;
        params = [lectureId];
        const checkLectureExist = yield Query(sql, params);
        if (!checkLectureExist[0]) {
            return res.status(400).json(responseFormat(400, "삭제된 강의는 수강 신청할 수 없습니다."));
        }
        if (!checkLectureExist[0].open) {
            return res.status(400).json(responseFormat(400, "비공개된 강의는 수강 신청할 수 없습니다."));
        }
        const students = JSON.parse(checkLectureExist[0].students);
        if (students[checkStudentExist[0].id]) {
            return res.status(400).json(responseFormat(400, "동일 강의를 수강신청할 수는 없습니다."));
        }
        req.body.students = students;
        return next();
    }
    catch (err) {
        console.log(err);
    }
}); // 완료 
exports.registerLectureVaildation = registerLectureVaildation;
const Query = (sql, params) => {
    return new Promise((resolve, reject) => {
        database_1.default.query(sql, params, (err, result) => {
            if (err)
                return reject(err);
            resolve(result);
        });
    });
};
