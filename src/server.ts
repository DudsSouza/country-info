import express from "express";
import dotenv from "dotenv";
import calendarRouter from "./routes/calendar.routes.js";
import countryRouter from "./routes/country.routes.js";
import { initDB } from "./db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(calendarRouter);
app.use(countryRouter);

initDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
