import 'reflect-metadata';
import express from "express";
import expressMiddlewares from "./middlewares/express"
import expressRoutes from "./routes";
import dotenv from "dotenv";
dotenv.config();

async function startServer() {
    const app = express();

    await expressMiddlewares(app)

    await expressRoutes(app)

    const port = process.env.PORT || 4000;
    app.listen(port, () => {
        console.log(`App is running on ${port}`)
    })
}

startServer()

export default startServer;