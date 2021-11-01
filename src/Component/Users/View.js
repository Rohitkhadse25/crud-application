import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
const View = () => {
    const [user, setUser]= useState({
        name:"",
        username:"",
        email:""
    });
    const {id}= useParams();
    useEffect(()=>{
        loadUsers();
    }, []);
   
    const loadUsers= async ()=> {
    const res= await axios.get(
        `http://localhost:3003/users/${id}`)
        setUser(res.data);
    };
   
    return (
        <div className="container py-2">
        <h1 className="display-7">User Id: {id}</h1>
      
            <ul className="list=group w-50">
            <li className="list-group-item">name: {user.name}</li>
            <li className="list-group-item">name: {user.username}</li>
            <li className="list-group-item">name: {user.email}</li>
            </ul>
            <Link className="btn btn-primary" to="/home">
            back to home</Link>
          
            <hr />
        </div>
    )
}

export default View
