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
    try {
        const schema = joi_1.default.object({
            instructor: joi_1.default.string().trim().max(30).required(),
            category: joi_1.default.array().items(joi_1.default.string()).max(1).required(),
            title: joi_1.default.string().trim().required(),
            description: joi_1.default.string().trim().required(),
            price: joi_1.default.number().integer().min(0).required(),
        });
        const { value, error } = yield schema.validate(req.body);
        if (error) {
            return res.send(responseFormat(403, "유효한 형식이 아닙니다", null, error.details[0].message));
        }
        req.body = value;
        const { body: { title, category, instructor } } = req;
        let sql = `SELECT * FROM lectures WHERE title = ?`;
        let params = [title];
        const duplicLecture = yield Query(sql, params);
        // 강의명 중복 확인
        if (duplicLecture[0]) {
            return res.status(403).json(responseFormat(403, "중복된 강의명이 존재합니다"));
        }
        // 지정된 카테고리값을 가지는지 확인
        const defaultCategory = ["웹", "앱", "게임", "알고리즘", "인프라", "데이터베이스"];
        if (category[0] && !defaultCategory.includes(category[0])) {
            return res.status(403).json(responseFormat(403, "지정된 카테고리를 입력해 주세요"));
        }
        sql = `SELECT * FROM instructors WHERE name = ?`;
        params = [instructor];
        const checkInstructor = yield Query(sql, params);
        // 강의를 오픈하려는 강사가 존재하는지 확인
        if (!checkInstructor[0]) {
            return res.status(403).json(responseFormat(403, "강사로 등록해야 강의를 등록할 수 있습니다."));
        }
        return next();
    }
    catch (err) {
        console.log(err);
    }
});
exports.createLectureVaildation = createLectureVaildation;
const updateLectureInfoVaildation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const schema = joi_1.default.object({
            title: joi_1.default.string().trim().required(),
            description: joi_1.default.string().trim().required(),
            price: joi_1.default.number().integer().min(0).required(),
        });
        const { value, error } = yield schema.validate(req.body);
        if (error) {
            return res.status(403).json(responseFormat(403, "유효한 형식이 아닙니다.", null, error.details[0].message));
        }
        req.body = value;
        const { body: { title, price }, params: { id } } = req;
        let sql = `SELECT open, title, price FROM lectures WHERE id = ?`;
        let params = [id];
        const checkLectureInfo = yield Query(sql, params);
        // 해당 강의가 존재하는지 확인
        if (!checkLectureInfo[0]) {
            return res.status(404).json(responseFormat(404, "해당 강의는 존재하지 않습니다."));
        }
        // open 되었지만 무료 강의의 경우 제한 없이 수정 가능
        if (checkLectureInfo[0].open && checkLectureInfo[0].price === 0) {
            return next();
        }
        // open 되었지만 무료가 아닌 경우 비활성화해야 수정 가능
        if (checkLectureInfo[0].open && checkLectureInfo[0].price > 0) {
            return res.status(403).json(responseFormat(403, "유료강의는 비활성화 상태에서만 수정이 가능합니다."));
        }
        // 업로드 하는 강의명이 중복되는지 확인
        sql = `SELECT title FROM lectures WHERE title = ?`;
        params = [title];
        const duplicTitle = yield Query(sql, params);
        console.log(duplicTitle);
        if (duplicTitle[0]) {
            return res.status(403).json(responseFormat(403, "중복된 강의명이 존재합니다."));
        }
        return next();
    }
    catch (err) {
        console.log(err);
    }
});
exports.updateLectureInfoVaildation = updateLectureInfoVaildation;
const openLectureVaildation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        let sql = `SELECT * FROM lectures WHERE id = ?`;
        let params = [id];
        const lectureExist = yield Query(sql, params);
        // 해당 강의가 없는 경우 확인
        if (!lectureExist[0]) {
            return res.status(404).json(responseFormat(404, "해당 강의는 존재하지 않습니다."));
        }
        // 이미 오픈 상태인 경우 확인
        if (lectureExist[0].open) {
            return res.status(403).json(responseFormat(403, "해당 강의는 이미 오픈된 상태입니다."));
        }
        return next();
    }
    catch (err) {
        console.log(err);
    }
});
exports.openLectureVaildation = openLectureVaildation;
const deleteLectureVaildation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        let sql = `SELECT * FROM lectures WHERE id = ?`;
        let params = [id];
        const lectureInfo = yield Query(sql, params);
        // 해당 강의가 없는 경우 확인
        if (!lectureInfo[0]) {
            return res.status(404).json(responseFormat(404, "해당 강의는 존재하지 않습니다."));
        }
        ;
        // 해당 강의에 수강생이 있는 경우 삭제 불가
        if (lectureInfo[0].attendance) {
            return res.status(403).json(responseFormat(403, "수강생이 존재하는 강의는 삭제할 수 없습니다."));
        }
        ;
        // 해당 강의가 open 상태인 경우 삭제 불가
        if (lectureInfo[0].open) {
            return res.status(403).json(responseFormat(403, "오픈된 강의는 삭제가 불가능합니다."));
        }
        ;
        return next();
    }
    catch (err) {
        console.log(err);
    }
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
            return res.status(403).json(responseFormat(403, "유효한 형식이 아닙니다", null, error.details[0].message));
        }
        req.body = value;
        const { lectureId, studentId } = req.body;
        let sql = `SELECT * FROM students WHERE id = ?`;
        let params = [studentId];
        const checkStudentExist = yield Query(sql, params);
        // 해당 학생이 회원인지 확인
        if (!checkStudentExist[0]) {
            return res.status(403).json(responseFormat(403, "가입된 수강생만 수강 신청할 수 있습니다."));
        }
        ;
        sql = `SELECT students, open FROM lectures WHERE id = ?`;
        params = [lectureId];
        const checkLectureExist = yield Query(sql, params);
        // 해당 강의가 없는 경우 확인
        if (!checkLectureExist[0]) {
            return res.status(404).json(responseFormat(404, "요청한 강의 정보를 찾을 수 없습니다."));
        }
        // 비공개된 강의를 신청할 경우 확인
        if (!checkLectureExist[0].open) {
            return res.status(403).json(responseFormat(403, "비공개된 강의를 수강 신청할 수 없습니다."));
        }
        // 중복 강의 신청 확인
        const students = JSON.parse(checkLectureExist[0].students);
        if (students[checkStudentExist[0].id]) {
            return res.status(403).json(responseFormat(403, "수강 중인 강의를 다시 수강 신청할 수 없습니다."));
        }
        req.body.students = students;
        req.body.nickname = checkStudentExist[0].nickname;
        return next();
    }
    catch (err) {
        console.log(err);
    }
});
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
