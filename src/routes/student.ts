import { Router } from "express";
import { createStudent, getListByStudentId } from "../controllers/student";
import { createStudentVaildation } from "../middlewares/vaildations/student";
import { ckeckDuplicUser } from "../models/studentquery";

const router = Router();


router.post("/student", createStudentVaildation, ckeckDuplicUser, createStudent)

router.get("/student/:id", getListByStudentId)


export default router;