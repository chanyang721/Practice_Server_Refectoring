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
exports.getListByinstructorName = void 0;
const typedi_1 = require("typedi");
const instructorquery_1 = __importDefault(require("../models/instructorquery"));
const requestFormat_1 = __importDefault(require("../utils/requestFormat"));
const { responseFormat } = typedi_1.Container.get(requestFormat_1.default);
const getListByinstructorName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        const InstructorModelInstance = typedi_1.Container.get(instructorquery_1.default);
        const { lecturesList } = yield InstructorModelInstance.getListByName(name);
        res.status(200).json(responseFormat(200, "해당 강사의 모든 강의 목록입니다", lecturesList));
    }
    catch (err) {
        console.log(err);
    }
});
exports.getListByinstructorName = getListByinstructorName;
