import { Router } from "express";
const router = Router();
import { 
    getListBylectureName, 
    getListByCategoryName,
    getListByIdAllCategory,
    getLectureByIdDetails,
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

router.get("/lecture/:id", getListByIdAllCategory)

router.get("/lecture/:id/category/:name", getListByCategoryName)

router.get("/lecture/:id/details", getLectureByIdDetails)

router.get("/lecture/:id/sort/desc", sortLecturesByTime)

router.get("/lecture/:id/sort/attendance", sortLecturesByAttendance)

router.post("/lecture", createLectureVaildation, createLecture) // 완료

router.put("/lecture/:id", updateLectureInfoVaildation, updateLectureInfo) // 완료 

router.patch("/lecture/:id/open", openLectureVaildation, openLecture) // 완료 

router.delete("/lecture/:id", deleteLectureVaildation, deleteLecture) // 완료 

router.post("/lecture/register", registerLectureVaildation, registerLecture) // 완료


export default router;

