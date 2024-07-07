import express from "express";
import {config} from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import {errorMiddleware} from "./middlewares/errorMiddleware.js";
import userRouter from "./router/userRouter.js"
import appointmentRouter from "./router/appointmentRouter.js";

import path from 'path';
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
const app=express();
config({path:"./config/config.env"});

app.use(cors(
    {
        origin:[process.env.FRONTEND_URL,process.env.DASHBOARD_URL,'http://localhost:5173'],
        methods:["GET","POST","PUT","DELETE"],
        credentials:true,
    }
));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/",
}));

app.use("/api/v1/message",messageRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/appointment",appointmentRouter);


app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "/client/dist/index.html")));

dbConnection();

app.use(errorMiddleware);
export default app;