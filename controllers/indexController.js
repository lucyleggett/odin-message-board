const { body, validationResult, matchedData } = require("express-validator");
const db = require("../db/queries");

exports.msgGet = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

const validateMsg = [
  body("nameInput")
    .trim()
    .isAlphanumeric()
    .withMessage("Name must only contain letters and numbers.")
    .isLength({ min: 1, max: 12 })
    .withMessage("Name must be between 1 and 12 characters."),
  body("messageInput")
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage("Message must be between 1 and 200 characters."),
  body("color")
    .optional({ values: "falsy" })
    .isHexColor()
    .withMessage("Color must be in Hex format."),
];

exports.msgCreate = [
  validateMsg,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("newMsg", {
        errors: errors.array(),
      });
    }
    const { messageInput, nameInput, themeColor } = matchedData(req);
    const color = /^#[0-9a-f]{6}$/i.test(themeColor) ? themeColor : "#ffffff";

    db.insertMessage(messageInput, nameInput, color);
    res.redirect("/");
  },
];
