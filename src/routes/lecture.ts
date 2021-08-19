import { Router } from "express";
const router = Router();
import { 
    getListBylectureName, 
    getListByCategoryName,
    getListByAllCategory,
    getLectureById,
    sortLecturesByTime,
    sortLecturesByAttendance,
    createLecture,
    updateLectureInfo,
    openLecture,
    deleteLecture,
    registerLecture
} from "../controllers/lecture";
import { 
    createLectureVaildation,
    updateLectureInfoVaildation,
    openLectureVaildation,
    deleteLectureVaildation,
    registerLectureVaildation,
} from "../middlewares/vaildations/lecture"


router.get("/lecture/:name", getListBylectureName)

router.get("/lecture/category/:name", getListByCategoryName)

router.get("/lecture/category", getListByAllCategory)

router.get("/lecture/:id/details", getLectureById)

router.get("/lecture/sort/desc", sortLecturesByTime)

router.get("/lecture/sort/attendance", sortLecturesByAttendance)

router.post("/lecture", createLectureVaildation, createLecture) 

router.patch("/lecture/:id", updateLectureInfoVaildation, updateLectureInfo)

router.patch("/lecture/:id/open", openLectureVaildation, openLecture)

router.delete("/lecture/:id", deleteLectureVaildation, deleteLecture)

router.post("/lecture/register", registerLectureVaildation, registerLecture)


export default router;

