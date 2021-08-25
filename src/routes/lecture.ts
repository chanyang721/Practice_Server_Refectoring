import { Router } from "express";
const router = Router();
import { 
    getListBylectureNameOrinstructorName, 
    getListByCategoryName,
    // getListByIdAllCategory,
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


router.get("/lecture/:name", getListBylectureNameOrinstructorName) // 완료

router.get("/lecture/:name/category/:category", getListByCategoryName) // 완료

router.get("/lecture/:name/detail", getLectureByIdDetail) // 완료

router.get("/lecture/:name/sort/desc", sortLecturesByTime) // 완료

router.get("/lecture/:name/sort/attendance", sortLecturesByAttendance) // 완료

router.post("/lecture", createLectureVaildation, createLecture) // 완료

router.put("/lecture/:id", updateLectureInfoVaildation, updateLectureInfo) // 완료 

router.patch("/lecture/:id/open", openLectureVaildation, openLecture) // 완료 

router.delete("/lecture/:id", deleteLectureVaildation, deleteLecture) // 완료 

router.post("/lecture/register", registerLectureVaildation, registerLecture) // 완료


export default router;

