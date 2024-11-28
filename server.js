const express = require('express');
const mysql = require('mysql2')
const dotenv = require('dotenv');//เรียกใช้
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
dotenv.config();


app.use(bodyParser.json());
app.use(cors());



//ส่งข้อมูลตัวแปรที่ 1 แบบ GET
app.get('/',(req,res) =>{

res.send("เข้าถึงข้อมูลแล้ว");

}

);



//เริ่มRunScript
app.listen(3000, ()=> {
    console.log("service เริ่มรัน");
});