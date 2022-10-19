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

app.get('/api/ads/:id', (req, res) => {
    const id = req.params.id

    Ad.findById(id).then(result => {
        res.json(result)
    })
})

const PORT = 3001
app.listen (PORT, () => {
    console.log(`Server is running on ${PORT}`)
})