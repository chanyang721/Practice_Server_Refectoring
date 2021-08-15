import { Router } from "express";
import { createStudent, getListByStudentId } from "../controllers/student";

const router = Router();


router.post("/student", createStudent)

router.get("/student/:id", getListByStudentId)


export default router;