import { Router } from "express";
import { CalendarController } from "../controllers/calendar.controller.js";

const router = Router();

router.post("/users/:userId/calendar/holidays", CalendarController.addHolidays);
router.get("/users/:userId/calendar/holidays", CalendarController.getHolidays);

export default router;
