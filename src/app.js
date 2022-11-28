import express from "express";
import projectsRoutes from "../src/routes/proyects.routes.js"

const app = express();


app.use(express.json())

app.use(projectsRoutes)

export default app;