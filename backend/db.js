const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://rafeldo36:Noori36@cluster0.kfaxzjs.mongodb.net/?retryWrites=true&w=majority'

const connectToMongo = () => {

    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;