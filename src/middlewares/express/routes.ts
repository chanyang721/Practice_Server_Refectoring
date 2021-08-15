import { Application } from "express";
import { instructorRouter, lectureRouter, studentRouter } from "../../routes";

export default (app: Application) => {

    app.use("/api", instructorRouter);
    
    app.use("/api", lectureRouter);

    app.use("/api", studentRouter);

}
