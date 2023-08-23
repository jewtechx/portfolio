const express =  require('express')
const multer = require('multer')
const path = require('path')

const websites = express.Router()

const {HttpUploadWebsite,HttpViewWebsite} = require("./websites.controller")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,"src/public/images")
    },
    filename : (req,file,cb) => {
        cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage:storage
})

websites.get('/',HttpViewWebsite)
websites.post('/',upload.single('file'),HttpUploadWebsite)

module.exports = websites