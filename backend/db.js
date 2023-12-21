import mysql from 'mysql2';

//Connecting to the MYSQL Database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "school",
  });

  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("MySql Connected");
  });

  export default db;