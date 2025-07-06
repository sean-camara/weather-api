// server/routes/weather.js

const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { lat, lon, lang = "en" } = req.query;

    if (!lat || !lon) {
      return res.status(400).json({
        error: "Missing required query parameters: lat and lon",
      });
    }

    const apiKey = process.env.WEATHERAPI_KEY;

    const url = `http://api.weatherapi.com/v1/forecast.json`;

    const response = await axios.get(url, {
      params: {
        key: apiKey,
        q: `${lat},${lon}`, // weatherapi uses lat,lon combined
        lang: lang,
        days: 7,
        aqi: "no",
        alerts: "no",
      },
    });

    res.json(response.data); // send raw API data to frontend
  } catch (err) {
    console.error("❌ Error fetching WeatherAPI data:", {
      message: err.message,
      status: err.response?.status,
      data: err.response?.data,
    });
    res.status(500).json({ error: "Failed to fetch WeatherAPI data." });
  }
});

module.exports = router;
