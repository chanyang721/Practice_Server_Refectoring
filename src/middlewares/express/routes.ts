import { Router } from "express";
import { instructorRouter, lectureRouter, studentRouter } from "../../routes";

export default (app: Router) => {

    app.use("/api", instructorRouter);
    
    app.use("/api", lectureRouter);

    app.use("/api", studentRouter);

}
