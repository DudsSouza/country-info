import { openDB } from "../db.js";

interface Holiday {
  id?: number;
  userId: string;
  name: string;
  year: number;
  countryCode: string;
}

export class CalendarService {
  static async addHolidays(userId: string, holidays: Omit<Holiday, "id">[]) {
    const db = await openDB();
    const stmt = await db.prepare(
      `INSERT INTO holidays (userId, name, year, countryCode) VALUES (?, ?, ?, ?)`
    );
    for (const h of holidays) {
      await stmt.run(userId, h.name, h.year, h.countryCode);
    }
    await stmt.finalize();
    return this.getHolidays(userId);
  }

  static async getHolidays(userId: string) {
    const db = await openDB();
    return db.all(`SELECT * FROM holidays WHERE userId = ?`, userId);
  }
}
