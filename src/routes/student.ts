import { Router } from "express";
import { createStudent, getListByStudentId } from "../controllers/student";
import { createStudentVaildation } from "../middlewares/vaildations/student";

const router = Router();


router.post("/student", createStudentVaildation, createStudent) // 완료

router.get("/student/:id", getListByStudentId)


export default router;