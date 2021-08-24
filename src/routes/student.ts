import { Router } from "express";
import { createStudent, getListByStudentId, getListByIdWithCategoryName } from "../controllers/student";
import { createStudentVaildation } from "../middlewares/vaildations/student";

const router = Router();


router.post("/student", createStudentVaildation, createStudent) // 완료

router.get("/student/:id", getListByStudentId) // 완료

router.get("/student/:id/category/:name", getListByIdWithCategoryName) // 완료


export default router;