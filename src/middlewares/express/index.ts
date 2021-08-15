import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";

export default async ({app}: {app: express.Application}) => {
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors({
        origin: true,
        credentials: true
    }))
}