import { Router } from "express";
import { CountryController } from "../controllers/country.controller.js";

const router = Router();

router.get("/countries", CountryController.getAvailableCountries);
router.get("/countries/:countryCode", CountryController.getCountryInfo);

export default router;
