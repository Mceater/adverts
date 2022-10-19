require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Ad = require('./data-connection')

const app = express()
app.use(cors())
app.use(express.json())
app.use = (express.static('build'))

app.get('/api/ads', (req, res) => {
    Ad.find({}).then(result => {
        res.json(result)
    })
})

// getting data with id (id needs to be inside "" mark or specify number in id)
app.get('/api/ads/:id', (req, res) => {
    const id = req.params.id

    Ad.findById(id).then(result => {
        res.json(result)
    })
})


app.post('/api/ads/:id', (req, res) => { // instead of post request put request can be used
    const id = req.params.id
    const newAd = req.body

    data.ads.map((ad) => {
        if(ad.id === id) {
            ad.userId = newAd.userId // though user id is not going change
            ad.img = newAd.img
            ad.url = newAd.url
            res.json(ad)
        }
    })
})

app.post('/api/ads', (req, res) => {
    const newAd = req.body
    data.ads.push(newAd)
    res.json(data.ads)
})

app.delete('/api/ads/:id', (req, res) => {
    const id = req.params.id

    newAds = []
    result = {"Status": "not found"}
    data.ads.map((ad) => {
        if(ad.id === id) {
            result = {"status": "success"} 
        } else {
            newAds.push(ad)
        }
    })

    data.ads = newAds
    res.json(result)
})

const PORT = 3001
app.listen (PORT, () => {
    console.log(`Server is running on ${PORT}`)
})