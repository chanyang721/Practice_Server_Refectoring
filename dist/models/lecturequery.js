"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
const typedi_1 = require("typedi");
const query_1 = __importDefault(require("../utils/query"));
const dayjs_1 = __importDefault(require("dayjs"));
dayjs_1.default().format();
let LectureModel = class LectureModel {
    constructor(QueryFormat) {
        this.queryFormat = QueryFormat;
    }
    getListBylectureNameOrinstructorNameQuery(lectureData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = lectureData;
                let sql = `SELECT lectures.id as lectureId, lectures.category, lectures.title, lectures.instructor, lectures.price, lectures.attendance, lectures.students, lectures.created_at
            FROM instructors 
            JOIN lectures ON lectures.instructor = instructors.name
            WHERE name LIKE "%${name}%" OR category LIKE "%${name}%" AND lectures.open = 1 
            ORDER BY lectures.attendance DESC`;
                let lecturesList = yield this.queryFormat.Query(sql);
                lecturesList = lecturesList.map(el => el = Object.assign(Object.assign({}, el), { students: JSON.parse(el.students) }));
                return { lecturesList };
            }
            catch (err) {
                console.log(err);
            }
        });
    } // 완료 이름으로 오픈된 강의 조회
    getListByCategoryNameQuery(lectureData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, category } = lectureData;
                let sql = `SELECT lectures.id as lectureId, lectures.category, lectures.title, lectures.instructor, lectures.price, lectures.attendance, lectures.students, lectures.created_at, lectures.updated_at
            FROM lectures
            JOIN instructors ON lectures.instructor = instructors.name
            WHERE instructors.name LIKE "%${name}%" OR lectures.title LIKE "%${name}%" AND lectures.category = ? AND lectures.open = 1`;
                let params = [category];
                let lecturesList = yield this.queryFormat.Query(sql, params);
                lecturesList = lecturesList.map(el => el = Object.assign(Object.assign({}, el), { students: JSON.parse(el.students) }));
                return { lecturesList };
            }
            catch (err) {
                console.log(err);
            }
        });
    } // 완료
    getLectureByIdDetailQuery(lectureData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = lectureData;
                let sql = `SELECT title, description, category, price, attendance, students, created_at, updated_at
            FROM lectures
            WHERE lectures.id = ?`;
                let params = [id];
                let lecturesList = yield this.queryFormat.Query(sql, params);
                lecturesList = lecturesList.map(el => el = Object.assign(Object.assign({}, el), { students: JSON.parse(el.students) }));
                return { lecturesList };
            }
            catch (err) {
                console.log(err);
            }
        });
    } // 완료
    sortLecturesByTimeQuery(lectureData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = lectureData;
                let sql = `SELECT lectures.id as lectureId, lectures.category, lectures.title, lectures.instructor, lectures.price, lectures.attendance, lectures.students, lectures.created_at
            FROM instructors 
            JOIN lectures ON lectures.instructor = instructors.name
            WHERE name LIKE "%${name}%" OR title LIKE "%${name}%" AND lectures.open = 1 
            ORDER BY lectures.created_at DESC`;
                let lecturesList = yield this.queryFormat.Query(sql);
                lecturesList = lecturesList.map(el => el = Object.assign(Object.assign({}, el), { students: JSON.parse(el.students) }));
                return { lecturesList };
            }
            catch (err) {
                console.log(err);
            }
        });
    } // 완료
    sortLecturesByAttendanceQuery(lectureData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = lectureData;
                let sql = `SELECT lectures.id as lectureId, lectures.category, lectures.title, lectures.instructor, lectures.price, lectures.attendance, lectures.students, lectures.created_at
            FROM instructors 
            JOIN lectures ON lectures.instructor = instructors.name
            WHERE name LIKE "%${name}%" OR title LIKE "%${name}%" AND lectures.open = 1 
            ORDER BY lectures.attendance DESC`;
                let lecturesList = yield this.queryFormat.Query(sql);
                lecturesList = lecturesList.map(el => el = Object.assign(Object.assign({}, el), { students: JSON.parse(el.students) }));
                return { lecturesList };
            }
            catch (err) {
                console.log(err);
            }
        });
    } // 완료
    createLectureQuery(lectureData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { instructor, category, title, description, price } = lectureData;
                let sql = `INSERT INTO lectures (instructor, category, title, description, price) VALUES (?)`;
                let params = [[instructor, category[0], title, description, price]];
                const lectureRecord = yield this.queryFormat.Query(sql, params);
                return { lectureRecord };
            }
            catch (err) {
                console.log(err);
            }
        });
    } // 완료
    updateLectureInfoQuery(lectureData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, description, price, id } = lectureData;
                let sql = `UPDATE lectures SET title = ?, description = ?, price = ? WHERE id = ?`;
                let params = [title, description, price, id];
                const updateLectureInfo = yield this.queryFormat.Query(sql, params);
                return { updateLectureInfo };
            }
            catch (err) {
                console.log(err);
            }
        });
    } // 완료 
    openLectureQuery(lecturesData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = lecturesData;
                let sql = `UPDATE lectures SET open = 1 WHERE id = ?`;
                let params = [id];
                const queryInfo = yield this.queryFormat.Query(sql, params);
                return { queryInfo };
            }
            catch (err) {
                console.log(err);
            }
        });
    } // 완료 
    deleteLectureQuery(lectureData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = lectureData;
                let sql = `DELETE FROM lectures WHERE id = ?`;
                let params = [id];
                const queryInfo = yield this.queryFormat.Query(sql, params);
                return { queryInfo };
            }
            catch (err) {
                console.log(err);
            }
        });
    } // 완료 
    registerLectureQuery(registerData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { students, nickname, lectureId, studentId } = registerData;
                const registerDay = dayjs_1.default().format("YYYY/MM/DD");
                students[studentId] = { nickname, registerDay };
                let sql = `UPDATE lectures SET students = ?, attendance = attendance + 1 WHERE id = ${lectureId}`;
                let params = [JSON.stringify(students)];
                const updateStudentsInfo = yield this.queryFormat.Query(sql, params);
                sql = `INSERT INTO lectures_students (lecture_id, student_id) VALUES (?, ?)`;
                params = [lectureId, studentId];
                yield this.queryFormat.Query(sql, params);
                return { updateStudentsInfo };
            }
            catch (err) {
                console.log(err);
            }
        });
    } // 완료
};
LectureModel = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [query_1.default])
], LectureModel);
exports.default = LectureModel;
