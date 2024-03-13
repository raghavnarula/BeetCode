const mongoose = require('mongoose')

exports.connectDB = async()=> {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        })
        console.log("Database Connection Successful")
    }
    catch(err){
        console.log(err)
    }
}