import React from 'react'
import { useState, useRef} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Navigate, Link } from 'react-router-dom'

const UserSignup = () => {
    const [name,setName] =useState("")
    const [email,setEmail] =useState("")
    const [phone,setPhone] =useState("")
    const [password,setPassword] =useState("")
    const [profilePic,setProfilePic] =useState("")
    const inputRef =useRef(null)

    function handleImage(e){
        let file = e.target.files[0]
        if (file.size>100000){
            toast.error("Choose less than 100KB")
            return;
        }
        let reader = new FileReader()

        reader.onloadend=()=>{
            setProfilePic(reader.result)
        }
        reader.readAsDataURL(file)
    }

    function signup(e){
        e.preventDefault()
        const user ={name,email,phone,password,profilePic}
        axios.post("http://localhost:3000/users",user)
        .then(()=>{
            toast.success("Signup success")
            setName("")
            setEmail("")
            setPhone("")
            setPassword("")
            setProfilePic("")
            inputRef.current.value = ""

        })
        .catch(err=>toast.error("Failed to Register"))
    }

  return (
    <>
      <center><h1>Welcome to UserSignup Page</h1></center>
        <form onSubmit={signup}>
            <input type="text" placeholder='Enter Name' 
            required 
            value={name} 
            onChange={(e)=>{setName(e.target.value)}}/><br />
            
            <input type="text" placeholder='Enter Email' 
            required 
            value={email} 
            onChange={(e)=>{setEmail(e.target.value)}}/><br />
            
            <input type="text" placeholder='Enter Phone' 
            required 
            value={phone} 
            onChange={(e)=>{setPhone(e.target.value)}}/><br />
            
            <input type="text" placeholder='Enter Password' 
            required 
            value={password} 
            onChange={(e)=>{setPassword(e.target.value)}}/><br />
            
            <input type="file" placeholder='Upload image'
            required 
            onChange={handleImage}
            ref={inputRef}
            />
            
            <input type="text" 
            required 
            value={profilePic} 
            onChange={(e)=>{setProfilePic(e.target.value)}}/>
            <button>SIGNUP</button>
        </form>

        <center>
          Are you Existing user? <Link to={"/userlogin"}>Login</Link>
        </center>
     
    </>
  )
}

export default UserSignup
