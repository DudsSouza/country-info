import axios from "axios";

const NAGER_API_URL = process.env.NAGER_API_URL!;
const POPULATION_URL = process.env.COUNTRIESNOW_POPULATION_URL!;
const FLAG_URL = process.env.COUNTRIESNOW_FLAG_URL!;

export class CountryService {
  static async getAvailableCountries() {
    const response = await axios.get(`${NAGER_API_URL}/AvailableCountries`);
    return response.data;
  }

  static async getCountryInfo(countryCode: string) {
    const bordersResp = await axios.get(`${NAGER_API_URL}/CountryInfo/${countryCode.toUpperCase()}`);
    const populationResp = await axios.post(POPULATION_URL, { country: bordersResp.data.commonName});
    const flagResp = await axios.post(FLAG_URL, { country: bordersResp.data.commonName});

    return {
      name: bordersResp.data.commonName,
      borders: bordersResp.data.borders,
      population: populationResp.data,
      flag: flagResp.data,
    };
  }
}
