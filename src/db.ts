import sqlite3 from "sqlite3";
import { open } from "sqlite";
import dotenv from "dotenv";
dotenv.config();

const DB_FILENAME = process.env.DB_FILENAME || "./calendar.sqlite";

export async function openDB() {
  return open({
    filename: DB_FILENAME,
    driver: sqlite3.Database,
  });
}

export async function initDB() {
  const db = await openDB();
  await db.run(`
    CREATE TABLE IF NOT EXISTS holidays (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId TEXT,
      name TEXT,
      year INTEGER,
      countryCode TEXT
    )
  `);
}
