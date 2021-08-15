"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_1 = require("../controllers/student");
const router = express_1.Router();
router.post("/student", student_1.createStudent);
router.get("/student/:id", student_1.getListByStudentId);
exports.default = router;
