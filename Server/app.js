const express = require('express');
const app = express();
const PORT = process.env.PORT || 9700;
const bcrypt = require('bcrypt');
const db = require('./config/db');
const cors = require('cors');


app.use(cors())
app.use(express.urlencoded({extended:true})),
app.use(express.json())


//====================Adding Employee===================

app.post('/addEmployee',(req,res)=>{

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password,8)
    const organization = req.body.organization
    db.query(
    "INSERT INTO employees (firstName, lastName, email, password, organization) VALUES (?,?,?,?,?)",[firstName, lastName, email, password, organization],
    (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.status(201).send("Values Inserted")
        }
    }
  )
})

//================ Getting Employees ==================
app.get('/getEmployees',(req,res)=>{
    db.query(
        "SELECT * FROM employees",(err,result)=>{
            if(err){
                console.log(err);
            }else{
                return res.send(result)
            }
        }
    )
})



app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Server is running on port ${PORT}`)
})