// Ingesting data into mongoDB already added 10 data twice

require('dotenv').config()
const mongoose = require('mongoose')
const Ad = require('./data-connection')
const fs = require('fs')

const rawData = fs.readFileSync('server/data.json')
const data = JSON.parse(rawData)

data.ads.map( ad => {
    console.log(ad)
    const newAd = new Ad ({
        userId: ad.userId,
        img: ad.img,
        url: ad.url,
        startDate: ad.startDate,
        endDate: ad.endDate,
        categories: ad.categories
    })
    newAd.save().then(result => {
        console.log("like record saved")
    })
})

// mongoose.connection.close()