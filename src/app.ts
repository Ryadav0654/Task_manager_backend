import express, {Express, Request, Response} from "express";
import cors from "cors";

const app:Express = express();



app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST", "PATCH", "DELETE"],
}))
//routes import
import taskRouter from "@routes/task.route"

//routes declaration
app.use("/api/v1/tasks", taskRouter); // http://localhost:8000/api/v1/users/register

app.get("/", (req:Request, res:Response) => {
    res.send("Hello Task Manager");
});

export {app};