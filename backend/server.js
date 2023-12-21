import express from 'express';
import { config } from 'dotenv';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import db from './db.js';


//Initilization of App
const app = express();
config();


//Using Middleware
app.use(fileUpload());
app.use(bodyParser.json({limit:"5mb"}));
app.use(bodyParser.urlencoded({extended:true,limit:"5mb"}));


//Connecting to the MYSQL Database
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "school",
//   });

//   db.connect((err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("MySql Connected");
//   });

//importing route
import school from './routes/schoolRoutes.js';

app.use("/api/v1",school);


app.listen(process.env.PORT,()=>{
    console.log(`This server is running on http://127.0.0.1:${process.env.PORT}`);
})











































