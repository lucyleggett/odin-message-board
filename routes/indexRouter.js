const { Router } = require("express");
const db = require("../db/queries");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.msgGet);
indexRouter.post("/new", indexController.msgCreate);

module.exports = { indexRouter };
