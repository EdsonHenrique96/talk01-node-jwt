import { Router } from "express";
import LoginController from "./app/controllers/LoginController";
import auth from "./app/middlewares/auth";
import TaskController from "./app/controllers/TaskController";

const routes = Router();

routes.get("/", auth, (req, res) => {
  res.json({ message: "it works" });
});

routes.get("/tasks", TaskController.show);

routes.post("/tasks", TaskController.store);

routes.post("/login", LoginController.store);

export default routes;
