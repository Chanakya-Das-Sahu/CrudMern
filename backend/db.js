const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://ccccsahu:Charu%40281971@cluster0.wnomgof.mongodb.net/mernStackProject?retryWrites=true&w=majority";
const connectToMongo = () =>{
    mongoose.connect(mongoURI)
    .then(()=>{console.log(`connected to mongodb successfully.`)})
    .catch((err)=>{console.log(`Unable to connect to mongodb due to error ${err}`)})
}

module.exports = connectToMongo ;

