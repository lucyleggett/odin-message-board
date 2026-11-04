const { Router } = require("express");
const db = require("../db/queries");

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.post("/new", (req, res) => {
  const { messageInput, nameInput, themeColor } = req.body;
  const color = /^#[0-9a-f]{6}$/i.test(themeColor) ? themeColor : "#ffffff";

  db.insertMessage(messageInput, nameInput, color);
  res.redirect("/");
});

module.exports = { indexRouter };
