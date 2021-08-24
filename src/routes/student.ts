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

router.get("/student/:id/category/:name", getListByStudentIdAndCategoryName) // 완료

router.get("/student/:id/sort/desc", sortStudentLectureListByTime)

router.get("/student/:id/sort/attendance", sortStudentLectureListByAttendance)


export default router;