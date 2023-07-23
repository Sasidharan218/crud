import React, { useState } from "react";
import axios from "axios";
import './user.css';
import { useNavigate } from "react-router-dom";

const Add = () => {
    const [adduser, setAdduser] = useState({
        name:"",
        age : null,
        email:"",
        city:"",
    })
    
    const navigate = useNavigate()
    const handleChange = (e) => {
        setAdduser(prev=>({...prev, [e.target.name]:e.target.value}))
        
    }

    const handleClick = async (e) =>{
        e.preventDefault()

      

        try{
            await axios.post("http://localhost:8080/users",adduser)
            navigate('/')
        }catch(err){
            console.log(err);
        }

    }

    return(
        <div>
            <h2 className="title">Add User</h2>
            <div className="edit">
            <label>Name</label>
            <input className="form-control" type="text" name="name" onChange={handleChange}/>
            <label>Age</label>
            <input className="form-control" type="number" name="age" onChange={handleChange}/>
            <label>Email</label>
            <input className="form-control" type="text" name="email" onChange={handleChange}/>
            <label>City</label>
            <input className="form-control" type="text" name="city" onChange={handleChange}/>
            <button className="btn btn-primary" onClick={handleClick}>Add</button>
            </div>
        </div>
    )
}

export default Add;