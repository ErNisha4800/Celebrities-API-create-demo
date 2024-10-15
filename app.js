require('dotenv').config();

const  express =require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;
const celebrities_routes = require("./routes/celebrity");
app.get("/", (req, res) => {
    res.send("Hi, I am Live");
});


//middleware or set router

app.use("/api/celebrities", celebrities_routes);
const start = async () => {
    try {
        // await connectDB(process.env.MONGODB_URL);
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
           console.log(`${PORT} Yes I am  connected`);
        } ); 
    } catch (error) { 
        console.log(error);
}
};

start();