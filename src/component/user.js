import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import './user.css';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";


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
        
        <Button className=" user" variant="contained" color="primary">
        <Link className="link" to={'/add'}>Add User</Link>
</Button><br/><br></br>
    <TableContainer component={Paper}>
      <Table className="table">
      
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>City</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {user.map((user,i)=>(
                       <TableRow key={i}>
                         
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.age}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.city}</TableCell>
                        <TableCell>
                        <Button className=" btn" variant="contained" color="primary"
                        onClick={()=> handleDelete(user.id)}>
                        Delete
                        </Button>
                        <Button className="btn"
                        variant="contained" color="secondary"><Link className="link" to={`/edit/${user.id}`}>Update</Link></Button></TableCell>
                       </TableRow>
                    ))}  
        </TableBody>
        </Table> 
        </TableContainer>
    </div>
)
}

export default Users;
