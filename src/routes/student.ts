import { Router } from "express";
import { createStudent, getListByStudentId } from "../controllers/student";
import { createStudentVaildation } from "../middlewares/vaildations/student";


const router = Router();


router.post("/student", createStudentVaildation, createStudent)

router.get("/student/:id", getListByStudentId)


export default router;