import express from "express";
import expressmiddlewares from "./middlewares/express";
import { instructorRouter, lectureRouter, studentRouter } from "./routes";

const app = express();
expressmiddlewares({ app })

app.use("/api", instructorRouter);
app.use("/api", lectureRouter);
app.use("/api", studentRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App is running on ${port}`)
})

