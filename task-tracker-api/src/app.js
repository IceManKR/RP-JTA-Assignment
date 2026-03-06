const express = require("express")
const cors = require("cors")
require("dotenv").config()

const authRoutes = require("./routes/auth.routes")
const taskRoutes = require("./routes/task.routes")

const app = express()

app.use(cors())
app.use(express.json())

// ROOT ROUTE
app.get("/", (req, res) => {
  res.send("Task Tracker API running")
})

app.use("/auth", authRoutes)
app.use("/tasks", taskRoutes)

module.exports = app