const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "hey, who's up?",
    user: "Tony",
    added: new Date(),
  },
  {
    text: "Yo, you still online?",
    user: "Tia",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages }),
);

indexRouter.post("/new", (req, res) => {
  const { messageInput, nameInput } = req.body;
  messages.push({ text: messageInput, user: nameInput, added: new Date() });
  res.redirect("/");
});

module.exports = { indexRouter, messages };
