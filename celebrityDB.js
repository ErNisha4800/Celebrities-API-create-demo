require('dotenv').config();

const connectDB = require("./db/connect");
const Celebrity =require("./models/celebrity");

const CelebrityJson = require("./celebrity.json");
const start = async () => {
    try {

        await connectDB(process.env.MONGODB_URL);
        await Celebrity.deleteMany(); 
        await Celebrity.create(CelebrityJson);
        console.log("Data inserted successfully");
    }catch(error)
    { 
        console.log(error); 
    }
};


start();