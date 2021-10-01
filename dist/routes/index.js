"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const instructor_1 = __importDefault(require("./instructor"));
const lecture_1 = __importDefault(require("./lecture"));
const student_1 = __importDefault(require("./student"));
exports.default = (app) => {
    app.use("/api", instructor_1.default);
    app.use("/api", lecture_1.default);
    app.use("/api", student_1.default);
};
// export { default as instructorRouter } from "./instructor";
// export { default as lectureRouter } from "./lecture";
// export { default as studentRouter } from "./student";
