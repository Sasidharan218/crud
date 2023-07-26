import React, { useState } from "react";
import axios from "axios";
import './user.css';
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, TextField } from "@mui/material";

const Edit = () => {
    const [adduser, setAdduser] = useState({
        name:"",
        age : null,
        email:"",
        city:"",
    })
    
    const navigate = useNavigate()
const location = useLocation()


const id = location.pathname.split("/")[2]

    const handleChange = (e) => {
        setAdduser(prev=>({...prev, [e.target.name]:e.target.value}))
       
    }

    const handleClick = async (e) =>{
        e.preventDefault()

       
        try{
           await axios.put("http://localhost:8080/users/"+id ,adduser)
            navigate('/')
        }catch(err){
            console.log(err);
        }

    }

    return(
        <div>
            <h2 className="title">Edit</h2>
            <Card className="edit" variant="outlined">
            <TextField id="outlined-basic" label="Name" variant="outlined" type="text" name="name"  onChange={handleChange}/>
            <TextField id="outlined-basic" label="Age" variant="outlined" type="number" name="age"  onChange={handleChange}/>
            <TextField id="outlined-basic" label="Email" variant="outlined" type="text" name="email"  onChange={handleChange}/>
            <TextField id="outlined-basic" label="City" variant="outlined" type="text" name="city"  onChange={handleChange}/>
            <Button variant="contained" color="success"  onClick={handleClick}>
            Update
            </Button>
            
            
            </Card>
        </div>
    )
}

export default Edit;