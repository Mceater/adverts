require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Ad = require('./data-connection')
const jwks = require("jwks-rsa")
var { expressjwt: jwt } = require("express-jwt");
const authConfig = process.env
const multer = require('multer')
const fs = require('fs')

const upload = multer({ dest: './public/uploads'})

const checkJWT = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${authConfig.REACT_APP_AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: authConfig.REACT_APP_AUDIENCE,
    issuer: `https://${authConfig.REACT_APP_AUTH0_DOMAIN}/`,
    algorithms: ["RS256"]
})

const app = express()
app.use(cors())
app.use(express.json())
app.use = (express.static('build'))

app.get('/api/ads', (req, res) => {
    Ad.find({}).then(result => {
        res.json(result)
    })
})

app.get('/api/ads/:id', (req, res) => {
    const id = req.params.id

    Ad.findById(id).then(result => {
        res.json(result)
    })
})

app.post ('/api/ads', upload.single("adPhoto"), checkJWT, async (req, res, next) => {
    let fileName = req.file.originalname
    fs.rename(`./public/uploads/${req.file.filename}`, "./public/uploads/" + fileName, function(){})
    console.log(req.file)

    const body = req.body

    const newAd = new Ad ({
        userId: body.userId,
        img: fileName,
        url: body.url,
        startDate: body.startDate,
        endDate: body.endDate,
        categories: body.categories
    })
    newAd.save().then(result => {
        res.json(result.toJSON)
        console.log("Ad record saved")
    })
    .catch(err => next(err))
})

app.post('api/ads/:id', (req, res) => {
    const id = req.body.id;
    const url = req.body.url;

    Ad.findByIdAndUpdate(id, {$set: {url: url}}, (err, doc) => {
        if(err) return console.log(err)
        res.json(doc)
    })
})

app.delete('/api/ads/:id', (req, res, next) => {
    Ad.findByIdAndRemove(req.params.id)
    
})

const PORT = 3001
app.listen (PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

