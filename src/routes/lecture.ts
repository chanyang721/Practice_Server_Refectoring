import { Router } from "express";
const router = Router();
import { 
    getListBylectureName, 
    getListByCategoryName,
    getListByAllCategory,
    getLectureById,
    createLecture,
    updateLectureInfo,
    openLecture,
    deleteLecture,
    registerLecture
} from "../controllers/lecture";


router.get("/lecture/:name", getListBylectureName)

router.get("/lecture/category/:name", getListByCategoryName)

router.get("/lecture/category", getListByAllCategory)

router.get("/lecture/:id/details", getLectureById)

router.post("/lecture", createLecture) 

router.patch("/lecture/:id", updateLectureInfo)

router.patch("/lecture/:id/open", openLecture)

router.delete("/lecture/:id", deleteLecture)

router.post("/lecture/register", registerLecture)


export default router;

