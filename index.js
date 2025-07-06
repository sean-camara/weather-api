// server/index.js

// 1. Load environment variables from .env
require("dotenv").config();

// 2. Import dependencies
const express = require("express");
const cors = require("cors");

// 3. Import our weather router
const weatherRouter = require("./routes/weather");

// 4. Initialize Express
const app = express();

// 5. Enable CORS for your frontend and local dev
const allowedOrigins = [
  "http://localhost:5173", // for local dev
  "https://weather-iota-drab-91.vercel.app", // your Vercel app
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET"],
  })
);

// 6. Mount your weather routes
app.use("/api/weather", weatherRouter);

// 7. Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
