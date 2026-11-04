const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  console.log("rows:", rows);
  return rows;
}

async function insertMessage(text, username, color) {
  await pool.query(
    "INSERT INTO messages (text, username, color) VALUES ($1, $2, $3)",
    [text, username, color],
  );
}

module.exports = {
  getAllMessages,
  insertMessage,
};
