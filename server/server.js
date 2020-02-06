const express = require('express')
const app = express()
const path = require("path")
const publicPath = path.join(__dirname, '..', "public")

app.use(express.static(publicPath))

app.get("*", (req, resp) => {
  resp.sendFile(path.join(publicPath, "index.html"))
})

app.listen(3000, () => {
  console.log("server live!")
})