const express = require("express")

const v1 = express.Router()

const websites = require("../routes/websites/websites.route")

v1.use('/websites',websites)

module.exports = v1