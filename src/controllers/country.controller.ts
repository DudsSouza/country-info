import { Request, Response } from "express";
import { CountryService } from "../services/country.service.js";

export class CountryController {
  static async getAvailableCountries(req: Request, res: Response) {
    try {
      const countries = await CountryService.getAvailableCountries();
      res.json(countries);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getCountryInfo(req: Request, res: Response) {
    try {
      const countryCode = req.params.countryCode;
      const country = await CountryService.getCountryInfo(countryCode);
      res.json(country);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
}
