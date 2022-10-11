const express = require('express')
const cors = require('cors')
const fs = require("fs")
// const authRouter = require("./routes/auth.js");
// const userRouter = require("./routes/user.js");

const rawData = fs.readFileSync("server/data.json")
const data = JSON.parse(rawData)

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('build'))

// app.use("/api/auth", authRouter);
// app.use("/api/users", userRouter);

// GET 
app.get('/api/users', (req, res) => {
    res.json(data.users)
})

app.get('/api/users/:id', (req, res) => { //getting user by id
    const id = req.params.id
    data.users.map((user) => {
        if(user.id === id){
            res.json(user)
        } else {
            res.status(404)
            res.send("<h1>User not found</h1>")
        }
    })
})

app.get('/api/ads', (req, res) => {
    res.json(data.ads)
})

app.get('/api/ads/:id', (req, res) => {
    const id = req.params.id
    data.ads.map((ad) => {
        if(ad.id === id){
            res.json(ad)
        } else {
            res.status(404)
            res.send("<h1>User not found</h1>")
        }
    })
})

// POST

// PUT

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})