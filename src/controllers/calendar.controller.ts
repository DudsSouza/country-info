import { Request, Response } from "express";
import axios from "axios";
import { CalendarService } from "../services/calendar.service.js";

export class CalendarController {
  static async addHolidays(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const { countryCode, year, holidays } = req.body;

      const response = await axios.get(
        `${process.env.NAGER_API_URL}/PublicHolidays/${year}/${countryCode}`
      );

      let selected = response.data;
      if (holidays?.length) {
        selected = selected.filter((h: any) => holidays.includes(h.localName));
      }

      const saved = await CalendarService.addHolidays(
        userId,
        selected.map((h: any) => ({
          name: h.localName,
          year,
          countryCode,
        }))
      );

      res.json(saved);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getHolidays(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const saved = await CalendarService.getHolidays(userId);
      res.json(saved);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
}
