import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const UserLogin = () => {
  const [email,setEmail] = useState("")
  const [password, setPassword] =useState("")

  let navigate = useNavigate()

  function login(e){
    e.preventDefault()
    axios.get("http://localhost:3000/users")
    .then(x=>{
      let user = x.data
      let result = user.find((y)=>{
        return (y.email===email && y.password===password)
      })
      if(result){
        toast.success("Login Success")
        setEmail("")
        setPassword("")
        localStorage.setItem("id",result.id)
        localStorage.setItem("email",result.email)
        localStorage.setItem("loggedIn",true)
        navigate("/userdashboard")
      }else{toast.error("Invaild credentials")}
    })

  }
    
  return (
    <>
        <center><h1>Welcome to UserLogin Page</h1></center>
        <center>
        <form onSubmit={login}>
          <input type="text" placeholder='Enter Email' 
          required 
          value={email} 
          onChange={(e)=>{setEmail(e.target.value)}}/><br />
          
          <input type="text" placeholder='Enter Password' 
          required 
          value={password} 
          onChange={(e)=>{setPassword(e.target.value)}}/> <br />

          <button>Login</button>

        </form>
        </center>
        
    </>
  )
}

export default UserLogin
