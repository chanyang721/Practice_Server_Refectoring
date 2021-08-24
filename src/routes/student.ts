import { Router } from "express";
import { 
    createStudent, 
    getListByStudentId, 
    getListByIdWithCategoryName,
    sortStudentByTime,
    sortStudentByAttendance,
} from "../controllers/student";
import { createStudentVaildation } from "../middlewares/vaildations/student";

const router = Router();


router.post("/student", createStudentVaildation, createStudent) // 완료

router.get("/student/:id", getListByStudentId) // 완료

router.get("/student/:id/category/:name", getListByIdWithCategoryName) // 완료

router.get("/student/:id/sort/desc", sortStudentByTime)

router.get("/student/:id/sort/attendance", sortStudentByAttendance)


export default router;