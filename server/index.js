require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Ad = require('./data-connection')
const jwks = require("jwks-rsa")
const jwt = require('express-jwt')
const authConfig = process.env
const multer = require('multer')
const fs = require('fs')

const upload = multer({ dest: './public/uploads'})

const rawData = fs.readFileSync("server/data.json")
const data = JSON.parse(rawData)

const checkJWT = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${authConfig.REACT_APP_AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: `https://${authConfig.REACT_APP_AUDIENCE}`,
    issuer: `https://${authConfig.REACT_APP_AUTH0_DOMAIN}`,
    algorithms: ['RS256']
})

const app = express()
app.use(cors())
app.use(express.json())
app.use = (express.static('build'))

app.post ('/api/ads', upload.single("adPhoto"), (req, res) => {
    let fileName = "./public/uploads/" + req.file.originalname
    fs.rename(`./public/uploads/${req.file.filename}`, fileName, function(){})

    const newAd = {
        img: req.file.originalname,
        url: req.body.url,
        categories: req.body.categories,
        id: req.body.id
    }

    data.ads.push(newAd)
    res.json(newAd)
})

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

/*app.post('/api/ads', checkJWT, async (req, res, next) => {
    const body = req.body

    const newAd = new Ad ({
        userId: body.userId,
        img: body.img,
        url: body.url,
        endDate: body.endDate,
        categories: body.categories
    })
    newAd.save().then(result => {
        res.json(result.toJSON)
        console.log("like record saved")
    })
    .catch(err => next(error))
})
*/

app.delete('/api/ads/:id', (req, res, next) => {
    Ad.findByIdAndRemove(req.params.id)
    .then(result => {
        res.status(204).end()
    })
    .catch(error => next(error)) 
})

const PORT = 3001
app.listen (PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

