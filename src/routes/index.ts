import { Router } from "express";

const route = Router();

route.get("/", (req, res) => {
  res.render("home/index");
});

export { route };
