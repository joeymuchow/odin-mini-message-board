import { Router } from "express";

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get("/", (req, res) => res.render("index", { title: "Mini Messageboard", messages: messages }));
indexRouter.get("/new", (req, res) => res.render("form", {}));
indexRouter.post("/new", (req, res) => {
  messages.push({ text: req.body.message, user: req.body.name, added: new Date() });
  res.redirect("/");
});
indexRouter.get("/details/:id", (req, res) => {
  const message = messages[req.params.id] || "none";
  if (message !== "none") {
    res.render("details", { text: message.text, user: message.user, date: message.added });
  } else {
    res.redirect("/");
  }
});

export default indexRouter;