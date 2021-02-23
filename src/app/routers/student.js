import { Router } from "express";
import StudentController from "../controllers/StudentController";

const routes = new Router();

routes.get("/student", StudentController.index);
routes.get("/student/:id", StudentController.show);
routes.post("/student", StudentController.store);
routes.put("/student/:id", StudentController.update);
routes.delete("/student/:id", StudentController.delete);

export default routes;
