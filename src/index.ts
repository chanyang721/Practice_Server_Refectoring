import express from "express";
import expressMiddlewares from "./middlewares/express/default";
import expressRoutes from "./middlewares/express/routes";

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