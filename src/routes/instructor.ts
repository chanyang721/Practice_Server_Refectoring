import { Router } from "express";
import { getListByinstructorName } from "../controllers/instructor";
const router = Router();


router.get("/:name", getListByinstructorName)


export default router;