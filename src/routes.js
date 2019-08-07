import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "it works" });
});

export default routes;
