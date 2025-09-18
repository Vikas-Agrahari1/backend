const express = require('express')
const app = express();
require('dotenv').config();
const main =  require('./config/db')
const authRouter = require("./routes/userauth");
const redisClient = require('./config/redis');
const cookieParser =  require('cookie-parser');
const aiRouter = require("./controllers/chat")
const cors = require('cors')

// console.log("Hello")

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true 
}))

app.use(express.json());
app.use(cookieParser());


app.use('/ai',aiRouter);
app.use('/user',authRouter);



const InitalizeConnection = async ()=>{
    try{
        
        await Promise.all([main(),redisClient.connect()]);
        console.log("DB Connected");

        app.listen(process.env.PORT, ()=>{
            console.log("Server listening at port number: "+ process.env.PORT);
        })

    }
    catch(err){
        console.log("Error: "+err);
    }
}


InitalizeConnection();

