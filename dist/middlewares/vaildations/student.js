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
exports.createStudentVaildation = void 0;
const typedi_1 = require("typedi");
const joi_1 = __importDefault(require("joi"));
const requestFormat_1 = __importDefault(require("../../utils/requestFormat"));
const database_1 = __importDefault(require("../../database"));
const { responseFormat } = typedi_1.Container.get(requestFormat_1.default);
const createStudentVaildation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = joi_1.default.object({
        email: joi_1.default.string().email().trim().max(30).required()
    });
    const { value, error } = yield schema.validate(req.body);
    if (error) {
        return res.status(400).json(responseFormat(400, "유효한 형식이 아닙니다.", null, error.details[0].message));
    }
    req.body = value;
    const { email } = req.body;
    let sql = `SELECT * FROM students WHERE email = ?`;
    let params = [email];
    const DuplicStudent = yield Query(sql, params);
    if (DuplicStudent[0]) {
        return res.status(400).json(responseFormat(400, "중복된 이메일이 존재합니다."));
    }
    return next();
}); // 완료 
exports.createStudentVaildation = createStudentVaildation;
const Query = (sql, params) => {
    return new Promise((resolve, reject) => {
        database_1.default.query(sql, params, (err, result) => {
            if (err)
                return reject(err);
            resolve(result);
        });
    });
};
