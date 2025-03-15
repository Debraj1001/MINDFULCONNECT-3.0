require("dotenv").config()
const express = require("express")
const cors = require("cors")
const serverless = require("serverless-http")

// Import routes
const authRoutes = require("./routes/auth")
const profileRoutes = require("./routes/profiles")
const forumRoutes = require("./routes/forums")
const moodRoutes = require("./routes/moods")
const resourceRoutes = require("./routes/resources")
const eventRoutes = require("./routes/events")
const challengeRoutes = require("./routes/challenges")

// Initialize Express app
const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/profiles", profileRoutes)
app.use("/api/forums", forumRoutes)
app.use("/api/moods", moodRoutes)
app.use("/api/resources", resourceRoutes)
app.use("/api/events", eventRoutes)
app.use("/api/challenges", challengeRoutes)

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "MindfulConnect API is running" })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    error: "Internal Server Error",
    message: process.env.NODE_ENV === "development" ? err.message : "Something went wrong",
  })
})

// For local development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

// For serverless deployment
module.exports.handler = serverless(app)

