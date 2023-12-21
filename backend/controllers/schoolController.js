import db from "../db.js";




// Created API for the
export const insertSchoolData = async (req, res) => {
    const { name, address, city, state, contact, email } = req.body;

    if (!name || !address || !city || !state || !contact || !email) {
        return res.status(400)
            .json({
                message: "One or more field is empty",
                data: null,
            });
    };

    console.log(name, address, city, state, contact, email);

    const sql = "INSERT INTO schools (name, address, city, state, contact, email) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [name, address, city, state, contact, email];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log('Error inserting data')
            return res.status(500)
                .json({ message: 'Error inserting data', error: err });
        } else {
            console.log('Data inserted successfully')
            return res.status(200)
                .json({ message: 'Data inserted successfully', result });
        }
    });
}


//fetching the data from the database
export const fetchingSchoolData = async (req, res) => {

    const sql = "SELECT * FROM schools";

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500)
                .json({
                    message: "Error while fetching data",
                    error: err,
                })
        } else {
            return res.status(200)
                .json({
                    message: "Data fetched correctly",
                    result,
                })
        }
    })
}

































