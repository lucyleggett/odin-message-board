const express = require("express");
const path = require("node:path");

const newMsgRouter = require("./routes/newMsgRouter");
const { indexRouter } = require("./routes/indexRouter");

const app = express();
app.use(express.urlencoded({ extended: true }));

const { formatDate, formatTime } = require("./helpers.js");

app.locals.formatDate = formatDate;
app.locals.formatTime = formatTime;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/", indexRouter);
app.use("/new", newMsgRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}!`);
});