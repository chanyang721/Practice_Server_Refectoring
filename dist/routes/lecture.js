"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const lecture_1 = require("../controllers/lecture");
const lecture_2 = require("../middlewares/vaildations/lecture");
router.get("/lecture/:name", lecture_1.getListBylectureName);
router.get("/lecture/category/:name", lecture_1.getListByCategoryName);
router.get("/lecture/category", lecture_1.getListByAllCategory);
router.get("/lecture/:id/details", lecture_1.getLectureById);
router.get("/lecture/sort/desc", lecture_1.sortLecturesByTime);
router.get("/lecture/sort/attendance", lecture_1.sortLecturesByAttendance);
router.post("/lecture", lecture_2.createLectureVaildation, lecture_1.createLecture); // 완료
router.put("/lecture/:id", lecture_2.updateLectureInfoVaildation, lecture_1.updateLectureInfo); // 완료 
router.patch("/lecture/:id/open", lecture_2.openLectureVaildation, lecture_1.openLecture); // 완료 
router.delete("/lecture/:id", lecture_2.deleteLectureVaildation, lecture_1.deleteLecture); // 완료 
router.post("/lecture/register", lecture_2.registerLectureVaildation, lecture_1.registerLecture); // 완료
exports.default = router;
