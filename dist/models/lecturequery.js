"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const database_1 = __importDefault(require("../database"));
let LectureModel = class LectureModel {
    createLectureService(lectureData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { instructor, category, title, description, price } = lectureData;
                let sql = `SELECT id FROM instructors WHERE name = ?`;
                let params = [instructor];
                const instructorData = yield this.Query(sql, params);
                sql = `INSERT INTO lectures (instructor, category, title, description, price, instructor_id) VALUES (?)`;
                params = [[instructor, category[0], title, description, price, instructorData[0].id]];
                const lectureRecord = yield this.Query(sql, params);
                return { lectureRecord };
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    Query(sql, params) {
        return new Promise((resolve, reject) => {
            database_1.default.query(sql, params, (err, result) => {
                if (err)
                    return reject(err);
                resolve(result);
            });
        });
    }
};
LectureModel = __decorate([
    typedi_1.Service()
], LectureModel);
exports.default = LectureModel;
