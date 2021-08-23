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
    registerLectureQuery(registerData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { students, lectureId, studentId } = registerData;
                const registerDay = dayjs_1.default().format("YYYY/MM/DD");
                students[studentId] = registerDay;
                let sql = `UPDATE lectures SET students = ? WHERE id = ${lectureId}`;
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
