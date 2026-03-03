const express = require("express");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const cors = require("cors");

const app = express();
app.use(cors());

async function initDb() {
  const db = await open({
    filename: "./counter.db",
    driver: sqlite3.Database
  });

  await db.exec("CREATE TABLE IF NOT EXISTS hits (count INTEGER)");
  const row = await db.get("SELECT count FROM hits");
  if (!row) await db.run("INSERT INTO hits (count) VALUES (0)");

  return db;
}

initDb().then(db => {
  app.get("/api/hit", async (req, res) => {
    await db.run("UPDATE hits SET count = count + 1");
    const row = await db.get("SELECT count FROM hits");
    res.json({ count: row.count });
  });

  app.listen(3001, () => console.log("Hit counter backend running on port 3001"));
});