import { Router } from "express";
import { 
    createStudent, 
    getListByStudentId, 
    getListByStudentIdAndCategoryName,
    sortStudentLectureListByTime,
    sortStudentLectureListByAttendance,
} from "../controllers/student";
import { createStudentVaildation } from "../middlewares/vaildations/student";

const router = Router();


router.post("/student", createStudentVaildation, createStudent) // 완료

router.get("/student/:id", getListByStudentId) // 완료

router.get("/student/:id/category/:category", getListByStudentIdAndCategoryName) // 완료

router.get("/student/:id/sort/desc", sortStudentLectureListByTime) // 완료

router.get("/student/:id/sort/attendance", sortStudentLectureListByAttendance) // 완료


export default router;