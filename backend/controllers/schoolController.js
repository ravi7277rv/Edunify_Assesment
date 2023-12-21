import db from "../db.js";




// Created API for the
export const insertSchoolData = async (req, res) => {
    const { name, address, city, state, number, image, email } = req.body;

    if (!name || !address || !city || !state || !number || !image || !email) {
        return res.status(400)
            .json({
                success: false,
                message: "One or more field is empty",
                data:null,
            });
    };

    const sql = "INSERT INTO schools (name, address, city, state, number, image, email) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [name, address, city, state, number, image, email];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500)
                .json({ message: 'Error inserting data', error: err });
        } else {
            return res.status(200)
                .json({ message: 'Data inserted successfully', result });
        }
    });
}


//fetching the data from the database
export const fetchingSchoolData = async( req, res) => {

    const sql = "SELECT * FROM schools";

    db.query(sql,(err,result) => {
        if(err){
            return res.status(500)
            .json({
                message:"Error while fetching data",
                error:err,
            })
        }else{
            return res.status(200)
            .json({
                message:"Data fetched correctly",
                result,
            })
        }
    })
}

































