const express = require("express");
const oracledb = require("oracledb");

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const app = express();

app.get("/", async (req,res) => {
    let connection = await oracledb.getConnection ({
        user:"",
        password:"",
        connectString: ""
    })

    const result = await connection.execute('select * from *');
    res(result);
})

app.listen(5000, () => {
    console.log("Server running on port 5000");
   });

