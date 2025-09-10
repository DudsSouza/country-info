# Country Info App - Backend

This project is a simple backend application to provide information about countries and allow users to add national holidays to their calendar. Built with **Node.js**, **Express.js**, and **TypeScript**, it integrates external APIs for country and holiday data.

---

## **Table of Contents**

* [Tech Stack](#tech-stack)
* [Features](#features)
* [Installation](#installation)
* [Environment Variables](#environment-variables)
* [Scripts](#scripts)
* [API Endpoints](#api-endpoints)
* [Testing](#testing)

---

## **Tech Stack**

* Node.js
* TypeScript
* Express.js
* Axios
* dotenv

---

## **Features**

* List available countries using Nager.Date API.
* Get detailed information about a specific country: borders, population, flag.
* Add national holidays of a specific country to a user's calendar.
* Retrieve saved holidays for a user.

---

## **Installation**

1. Clone the repository:

```bash
git clone https://github.com/DudsSouza/country-info.git
cd country-info
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file in the root folder:

```
PORT=3000
NAGER_API_URL=https://date.nager.at/api/v3
COUNTRIESNOW_POPULATION_URL=https://countriesnow.space/api/v0.1/countries/population
COUNTRIESNOW_FLAG_URL=https://countriesnow.space/api/v0.1/countries/flag/images
DB_FILENAME=./calendar.sqlite
```

---

## **Environment Variables**

| Variable              | Description                          |
| --------------------- | ------------------------------------ |
| PORT                  | Server port (default: 3000)          |
| COUNTRY\_API\_BASE    | Base URL for country API             |
| POPULATION\_API\_BASE | Base URL for population and flag API |

---

## **Scripts**

| Command         | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Run development server        |
| `npm start`     | Start server in production    |

---

## **API Endpoints**

### **Countries**

* **List all countries**

```
GET /countries
```

* **Get country info**

```
GET /countries/:countryCode
```

Example: `/countries/BR`

---

### **Calendar**

* **Add national holidays to user calendar**

```
POST /users/:userId/calendar/holidays
```

Request Body Example:

```json
{
  "countryCode": "US",
  "year": 2025,
  "holidays": ["New Year's Day", "Independence Day"]
}
```

* **Get user holidays**

```
GET /users/:userId/calendar/holidays
```

---

## **Testing**

* Use **Postman**, **Insomnia**, or **curl** to test endpoints.
* Example using curl to add holidays:

```bash
curl -X POST http://localhost:3000/users/123/calendar/holidays \
-H "Content-Type: application/json" \
-d '{
  "countryCode": "US",
  "year": 2025,
  "holidays": ["New Year\'s Day", "Independence Day"]
}'
```

* Example using curl to get user holidays:

```bash
curl http://localhost:3000/users/123/calendar/holidays
```

---

## **Notes**

* Make sure your `.env` file is correctly set before running the server.
