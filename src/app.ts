import express from "express";
import dotenv from "dotenv";
import countryRoutes from "./routes/country.routes.js";
import calendarRoutes from "./routes/calendar.routes.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("", countryRoutes);
app.use("", calendarRoutes);

app.get("/test", (req, res) => res.send("Country Info App is running!"));

export default app;
