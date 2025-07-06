// server/index.js

// 1. Load environment variables from .env
require("dotenv").config();

// 2. Import dependencies
const express = require("express");
const cors = require("cors");

// 3. Import our weather router (we’ll create this next)
const weatherRouter = require("./routes/weather");

// 4. Initialize Express
const app = express();

// 5. Enable CORS so the frontend can talk to this server
app.use(cors());

// 6. Mount our weather routes under /api/weather
app.use("/api/weather", weatherRouter);

// 7. Start listening on port from .env or 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
