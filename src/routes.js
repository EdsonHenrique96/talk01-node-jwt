import { Router } from "express";
import LoginController from "./app/controllers/LoginController";
import auth from "./app/middlewares/auth";

const routes = Router();

routes.get("/", auth, (req, res) => {
  res.json({ message: "it works" });
});

routes.post("/login", LoginController.store);

export default routes;
