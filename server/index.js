// server/index.js
const express = require("express")
const path = require("path")

const PORT = process.env.PORT || 3001

const app = express()

// Node serves the static files for built app
app.use(express.static(path.resolve(__dirname, "../client/build")))

// Handle GET requests for /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" })
})

//All other GET requests not handle before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
