import { Router } from "express";

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("newMessage", {});
});

export default newMessageRouter;