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
const errorformat_1 = __importDefault(require("../../utils/errorformat"));
const joi_1 = __importDefault(require("joi"));
const createStudentVaildation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = joi_1.default.object({
        email: joi_1.default.string().email().trim().max(30).required()
    });
    try {
        yield schema.validateAsync(req.body);
        console.log("유효성 통과");
        return next();
    }
    catch (err) {
        res.send(errorformat_1.default(400, "유효한 형식이 아닙니다", err.details[0].message));
    }
});
exports.createStudentVaildation = createStudentVaildation;
