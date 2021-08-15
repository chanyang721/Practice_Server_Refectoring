"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("../../routes");
exports.default = (app) => {
    app.use("/api", routes_1.instructorRouter);
    app.use("/api", routes_1.lectureRouter);
    app.use("/api", routes_1.studentRouter);
};
