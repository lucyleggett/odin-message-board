const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "hello from colorado!",
    user: "Tony",
    color: "#b66ab8",
    added: new Date(),
  },
  {
    text: "nice to meet you man!",
    user: "Tia",
    color: "#027860",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages }),
);

indexRouter.post("/new", (req, res) => {
  const { messageInput, nameInput, themeColor } = req.body;
  const color = /^#[0-9a-f]{6}$/i.test(themeColor) ? themeColor : "#ffffff";

  messages.push({
    text: messageInput,
    user: nameInput,
    color,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = { indexRouter, messages };
