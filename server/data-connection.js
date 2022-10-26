const mongoose = require('mongoose')
const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(result => {
    console.log('connected to MongoDB')
})
.catch((err) => {
    console.log(err)
})

const adSchema = new mongoose.Schema({
    userId: String,
    img: {
        data: Buffer,
        contentType: String
    },
    url: String,
    startDate: Date,
    endDate: Date,
    categories: Array
})

adSchema.set('toJSON', {
    transform: (document, returnedObj) => {
        returnedObj.id = returnedObj._id.toString()
        delete returnedObj._id
        delete returnedObj.__V
    }
})

const Ad = mongoose.model("Ad", adSchema)

module.exports = Ad