import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import './user.css';


const Users =() => {
    const [user, setUser] = useState([])


useEffect(()=>{
    const fetchuser = async ()=> {
        try{
            const res = await axios.get("http://localhost:8080/users")
            setUser(res.data)
        
        }catch(err){
            console.log(err);
        }
    }

    fetchuser();
},[])

const handleDelete = async (id) => {
    try{
        await axios.delete("http://localhost:8080/users/"+id)
        window.location.reload()
    }catch(err){
        console.log(err)
    }
}

return(
    <div className="container">
        <h1 className="title">Table</h1>
        <button className="btn btn-primary user"><Link className="link" to={'/add'}>Add User</Link></button>
      <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            {user.map((user,i)=>(
                       <tr key={i}>
                         
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                        <td>{user.city}</td>
                        <td><button className="btn btn-danger" onClick={()=> handleDelete(user.id)}>delete</button>
                        <button className="btn btn-info"><Link className="link" to={`/edit/${user.id}`}>Update</Link></button></td>
                       </tr>
                    ))}  
        </tbody>
        </table> 
    </div>
)
}

export default Users;
