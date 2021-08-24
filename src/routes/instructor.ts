import { Router } from "express";
import { 
    getListByinstructorName,
    getListByInstructorNameAndCategoryName,
    sortInstructorLectureListByTime,
    sortInstructorLectureListByAttendance,
} from "../controllers/instructor";
const router = Router();


router.get("/instructor/:name", getListByinstructorName)

router.get("/instructor/:name/category/:category", getListByInstructorNameAndCategoryName) // 완료

router.get("/instructor/:name/sort/desc", sortInstructorLectureListByTime)

router.get("/instructor/:name/sort/attendance", sortInstructorLectureListByAttendance)


export default router;


