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
const joi_1 = __importDefault(require("joi"));
const createLectureVaildation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const {} = req.body;
    const schema = joi_1.default.object({});
    const { value, error } = yield schema.validateAsync(req.body);
    return next();
});
exports.createLectureVaildation = createLectureVaildation;
const updateLectureInfoVaildation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const {} = req.body;
    const schema = joi_1.default.object({});
    const { value, error } = yield schema.validateAsync(req.body);
    return next();
});
exports.updateLectureInfoVaildation = updateLectureInfoVaildation;
const openLectureVaildation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const {} = req.body;
    const schema = joi_1.default.object({});
    const { value, error } = yield schema.validateAsync(req.body);
    return next();
});
exports.openLectureVaildation = openLectureVaildation;
const deleteLectureVaildation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const {} = req.body;
    const schema = joi_1.default.object({});
    const { value, error } = yield schema.validateAsync(req.body);
    return next();
});
exports.deleteLectureVaildation = deleteLectureVaildation;
const registerLectureVaildation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const {} = req.body;
    const schema = joi_1.default.object({});
    const { value, error } = yield schema.validateAsync(req.body);
    return next();
});
exports.registerLectureVaildation = registerLectureVaildation;
