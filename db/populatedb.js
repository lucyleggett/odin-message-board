const pool = require("./pool");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT,
  username VARCHAR(255),
  color VARCHAR(7),
  added TIMESTAMPTZ DEFAULT now()
);

INSERT INTO messages (text, username, color)
VALUES
  ('hello from colorado!', 'Tony', '#b66ab8'),
  ('nice to meet you man!', 'Tia', '#027860');
`;

async function getPgVersion() {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT version()");
    await client.query(SQL);
    console.log(result.rows[0]);
  } finally {
    client.release();
  }
}

getPgVersion();
