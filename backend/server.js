import express from 'express';
import { config } from 'dotenv';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import db from './db.js';
import cors from 'cors';


//Initilization of App
const app = express();
config();


//Using Middleware
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json({limit:"5mb"}));
app.use(bodyParser.urlencoded({extended:true,limit:"5mb"}));


//importing route
import school from './routes/schoolRoutes.js';

app.use("/api/v1",school);


app.listen(process.env.PORT,()=>{
    console.log(`This server is running on http://127.0.0.1:${process.env.PORT}`);
})











































