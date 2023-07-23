import React, { useState } from "react";
import axios from "axios";
import './user.css';
import { useLocation, useNavigate } from "react-router-dom";

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
            <div className="edit">
            <label>Name</label>
            <input className="form-control" type="text" name="name" onChange={handleChange}/>
            <label>Age</label>
            <input className="form-control" type="number" name="age" onChange={handleChange}/>
            <label>Email</label>
            <input className="form-control" type="text" name="email" onChange={handleChange}/>
            <label>City</label>
            <input className="form-control" type="text" name="city" onChange={handleChange}/>
            <button className="btn btn-success" onClick={handleClick}>Update</button>
            </div>
        </div>
    )
}

export default Edit;