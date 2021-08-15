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


router.get("/:name", getListBylectureName)

router.get("/category/:name", getListByCategoryName)

router.get("/category", getListByAllCategory)

router.get("/:id/details", getLectureById)

router.post("/", createLecture)

router.patch("/:id", updateLectureInfo)

router.patch("/:id/open", openLecture)

router.delete("/:id", deleteLecture)

router.post("/register", registerLecture)


export default router;

