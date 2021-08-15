"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRouter = exports.lectureRouter = exports.instructorRouter = void 0;
var instructor_1 = require("./instructor");
Object.defineProperty(exports, "instructorRouter", { enumerable: true, get: function () { return __importDefault(instructor_1).default; } });
var lecture_1 = require("./lecture");
Object.defineProperty(exports, "lectureRouter", { enumerable: true, get: function () { return __importDefault(lecture_1).default; } });
var student_1 = require("./student");
Object.defineProperty(exports, "studentRouter", { enumerable: true, get: function () { return __importDefault(student_1).default; } });
