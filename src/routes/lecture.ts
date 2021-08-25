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


router.get("/lecture/:name", getListBylectureTitleOrinstructorName) // 완료

router.get("/lecture/:name/category/:category", getListAddConditionCategoryName) // 완료

router.get("/lecture/:id/detail", getLectureByIdDetail) // 완료

router.get("/lecture/:name/sort/desc", sortLecturesByTime) // 완료

router.get("/lecture/:name/sort/attendance", sortLecturesByAttendance) // 완료

router.post("/lecture", createLectureVaildation, createLecture) // 완료

router.put("/lecture/:id", updateLectureInfoVaildation, updateLectureInfo) // 완료 

router.patch("/lecture/:id/open", openLectureVaildation, openLecture) // 완료 

router.delete("/lecture/:id", deleteLectureVaildation, deleteLecture) // 완료 

router.post("/lecture/register", registerLectureVaildation, registerLecture) // 완료


export default router;

