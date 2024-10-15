const mongoose =require("mongoose");



// new data base pw 
// username :AI-serverdata
// pw: OUK96fV3SmXbNr5B
// mongodb+srv://AI-serverdata:<db_password>@cluster0.qwn6s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
  // uri="mongodb+srv://AI-serverdata:OUK96fV3SmXbNr5B@cluster0.qwn6s.mongodb.net/AI-serverdata?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = (uri) => {
    // console.log("coonected db");

    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    // return mongoose.connect(uri);
};
 

module.exports = connectDB;