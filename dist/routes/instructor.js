"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const instructor_1 = require("../controllers/instructor");
const router = express_1.Router();
router.get("/:name", instructor_1.getListByinstructorName);
exports.default = router;
