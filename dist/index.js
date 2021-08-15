"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
dotenv_1.default.config();
const app = express_1.default();
app.use(express_1.default.json());
app.use(cookie_parser_1.default());
app.use(cors_1.default({
    origin: true,
    credentials: true
}));
app.use("/instructor", routes_1.instructorRouter);
app.use("/lecture", routes_1.lectureRouter);
app.use("/student", routes_1.studentRouter);
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App is running on ${port}`);
});
