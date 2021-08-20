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
exports.getListByStudentId = exports.createStudent = void 0;
const typedi_1 = require("typedi");
const studentquery_1 = __importDefault(require("../models/studentquery"));
const requestFormat_1 = __importDefault(require("../utils/requestFormat"));
const { responseFormat } = typedi_1.Container.get(requestFormat_1.default);
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const studentModelInstance = typedi_1.Container.get(studentquery_1.default);
        const { userRecord } = yield studentModelInstance.createUser(email);
        if (userRecord)
            res.status(200).json(responseFormat(200, "유저 생성 완료", userRecord));
        else
            res.status(400).json(responseFormat(400, "중복된 이메일이 존재합니다", null));
    }
    catch (err) {
        console.log(err);
    }
});
exports.createStudent = createStudent;
const getListByStudentId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const studentModelInstance = typedi_1.Container.get(studentquery_1.default);
        const { lecturesList } = yield studentModelInstance.getLectureLists(id);
        res.status(200).json(responseFormat(200, "해당 학생의 모든 강의 목록입니다", lecturesList));
    }
    catch (err) {
        console.log(err);
    }
});
exports.getListByStudentId = getListByStudentId;
