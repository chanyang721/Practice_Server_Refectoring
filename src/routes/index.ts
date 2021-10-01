import { Router } from "express";
import instructorRouter from "./instructor";
import lectureRouter from "./lecture";
import studentRouter from "./student"

export default (app: Router) => {

    app.use("/api", instructorRouter);
    
    app.use("/api", lectureRouter);

    app.use("/api", studentRouter);

}
