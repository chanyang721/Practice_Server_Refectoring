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
let InstructorModel = class InstructorModel {
    constructor(QueryFormat) {
        this.queryFormat = QueryFormat;
    }
    getListByNameQuery(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let sql = `SELECT lectures.id, lectures.category, lectures.title, instructors.name, lectures.price, lectures.students, lectures.created_at
            FROM instructors 
            JOIN lectures ON lectures.instructor = instructors.name
            WHERE name = ? AND lectures.open = 1`;
                const lecturesList = yield this.queryFormat.Query(sql, [name]);
                return { lecturesList };
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    ; // 완료
    getListByInstructorNameAndCategoryNameQuery({ name, category }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let sql = `SELECT lectures.id, lectures.category, lectures.title, instructors.name, lectures.price, lectures.students, lectures.created_at
            FROM instructors 
            JOIN lectures ON lectures.instructor = instructors.name
            WHERE name = ? AND lectures.open = 1 AND lectures.category = ?`;
                const lecturesList = yield this.queryFormat.Query(sql, [name, category]);
                return { lecturesList };
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    ;
    sortInstructorLectureListByTimeQuery(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let sql = `SELECT lectures.id, lectures.category, lectures.title, instructors.name, lectures.price, lectures.students, lectures.created_at
            FROM instructors 
            JOIN lectures ON lectures.instructor = instructors.name
            WHERE name = ? AND lectures.open = 1`;
                const lecturesList = yield this.queryFormat.Query(sql, [name]);
                const sortList = lecturesList.sort((a, b) => a.created_at > b.created_at ? -1 : 1);
                return { sortList };
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    ;
    sortInstructorLectureListByAttendanceQuery(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let sql = `SELECT lectures.id, lectures.category, lectures.title, instructors.name, lectures.price, lectures.students, lectures.created_at
            FROM instructors 
            JOIN lectures ON lectures.instructor = instructors.name
            WHERE name = ? AND lectures.open = 1`;
                const lecturesList = yield this.queryFormat.Query(sql, [name]);
                const sortList = lecturesList.sort((a, b) => a.attendance > b.attendance ? -1 : 1);
                return { sortList };
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    ;
};
InstructorModel = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [query_1.default])
], InstructorModel);
exports.default = InstructorModel;
