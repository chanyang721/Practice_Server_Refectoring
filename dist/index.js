"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = __importDefault(require("./middlewares/express"));
const routes_1 = require("./routes");
const app = express_1.default();
express_2.default({ app });
app.use("/api", routes_1.instructorRouter);
app.use("/api", routes_1.lectureRouter);
app.use("/api", routes_1.studentRouter);
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App is running on ${port}`);
});
