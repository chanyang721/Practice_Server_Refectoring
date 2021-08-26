import { Router } from "express";
const router = Router();
import { 
    getListBylectureTitleOrinstructorName, 
    getListAddConditionCategoryName,
    getLectureByIdDetail,
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


router.get("/lecture/:name", getListBylectureTitleOrinstructorName)

router.get("/lecture/:name/category/:category", getListAddConditionCategoryName)

router.get("/lecture/:id/detail", getLectureByIdDetail)

router.get("/lecture/:name/sort/desc", sortLecturesByTime)

router.get("/lecture/:name/sort/attendance", sortLecturesByAttendance)

router.post("/lecture", createLectureVaildation, createLecture)

router.put("/lecture/:id", updateLectureInfoVaildation, updateLectureInfo) 

router.patch("/lecture/:id/open", openLectureVaildation, openLecture) 

router.delete("/lecture/:id", deleteLectureVaildation, deleteLecture)

router.post("/lecture/register", registerLectureVaildation, registerLecture)


export default router;

