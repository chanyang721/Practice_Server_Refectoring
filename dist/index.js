"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const instructor_1 = __importDefault(require("./routes/instructor"));
const lecture_1 = __importDefault(require("./routes/lecture"));
const student_1 = __importDefault(require("./routes/student"));
dotenv_1.default.config();
const app = express_1.default();
app.use(express_1.default.json());
app.use(cookie_parser_1.default());
app.use(cors_1.default({
    origin: true,
    credentials: true
}));
app.get("/", (req, res, next) => {
    res.send("Hello World!");
});
app.use("/api", instructor_1.default);
app.use("/api", lecture_1.default);
app.use("/api", student_1.default);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`서버가 ${port}번 포트에서 작동중입니다.`);
});
