"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const instructor_1 = require("../controllers/instructor");
const router = express_1.Router();
router.get("/instructor/:name", instructor_1.getListByinstructorName);
router.get("/instructor/:name/category/:category", instructor_1.getListByInstructorNameAndCategoryName); // 완료
router.get("/instructor/:name/sort/desc", instructor_1.sortInstructorLectureListByTime);
router.get("/instructor/:name/sort/attendance", instructor_1.sortInstructorLectureListByAttendance);
exports.default = router;
