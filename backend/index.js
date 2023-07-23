const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host:"mydb.cx8q6uqd9rqp.ap-south-1.rds.amazonaws.com",
    user:"admin",
    password:"krishnan12345",
    database:"crud"
})


app.get("/users",(req,res)=>{
    const q = "SELECT * FROM crud.crud_table";
    db.query(q,(err,data)=>{
        if (err) {
            res.json(err)
        }else{
            res.json(data)
        }
    })
})

app.post('/users',(req, res)=>{
    const q = "INSERT INTO crud.crud_table (`name`,`age`,`email`,`city`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.age,
        req.body.email,
        req.body.city,
    ]

    db.query(q,[values],(err,data)=>{
        if (err) {
            res.json(err)
        }else{
            res.json("data")
        }
    })
})

app.delete("/users/:id",(req,res)=>{
    const userId = req.params.id;
    const q = "DELETE FROM crud.crud_table WHERE id = ?"

    db.query (q,[userId],(err, data)=>{
        if(err){
            res.json(err)
        }else{
            res.json("deleted")
        }
    })
})
 

app.put('/users/:id',(req,res)=>{
    const userId = req.params.id;
    const q = "UPDATE crud.crud_table SET `name` = ?, `age` = ?, `email` = ?, `city` = ? WHERE id = ?"

    const values = [
        req.body.name,
        req.body.age,
        req.body.email,
        req.body.city,
    ]

    db.query (q,[...values,userId],(err, data)=>{
        if(err){
            res.json(err)
        }else{
            res.json("updated")
        }
    })
})
 

app.listen(8080,()=>{
    console.log("Listening");
})