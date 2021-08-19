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
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const studentModelInstance = typedi_1.Container.get(studentquery_1.default);
        const { userRecord } = yield studentModelInstance.createUser(email);
        res.status(200).json({ userRecord });
    }
    catch (err) {
        console.log(err);
        throw new Error("1");
    }
});
exports.createStudent = createStudent;
const getListByStudentId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("getListByStudentId");
});
exports.getListByStudentId = getListByStudentId;
