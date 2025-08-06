const express = require('express')
const app = express();
require('dotenv').config();

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



const InitalizeConnection = async ()=>{
    try{
        
        app.listen(process.env.PORT, ()=>{
            console.log("Server listening at port number: "+ process.env.PORT);
        })

    }
    catch(err){
        console.log("Error: "+err);
    }
}


InitalizeConnection();

