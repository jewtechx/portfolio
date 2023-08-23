const express = require("express")

const app = express()

const cors = require("cors")

// const websites = require("./routes/websites/websites.route")

const v1 = require("./routes/v1")

app.use(cors({
    origin:'http://localhost:3000'
}))

app.use(express.json())

app.use('/v1',v1)


module.exports = app
