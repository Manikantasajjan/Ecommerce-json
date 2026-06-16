import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const AdminLogin = () => {
  const[email,setEmail] = useState("")
  const [password,setPassword] =useState("")
  const navigate =useNavigate()

  function adminLogin(e){
    if(email === "admin@gmail.com" && password === "admin@123"){
      toast.success("Login Success")
      navigate("/admindashboard")
    }else(
      toast.error("Invalid cerdentails")
    )
  }
  return (
    <div>
      <div className="login-container">
      <center>
      <form action="" onSubmit={adminLogin}>
        <input type="text" placeholder='Enter Email' 
        required 
        value={email} 
        onChange={(e)=>{setEmail(e.target.value)}} /> <br />
        <input type="password" placeholder='Enter Password' 
        required 
        value={password} 
        onChange={(e)=>{setPassword(e.target.value)}} />
        <button>Login</button>
        
      </form>
      </center>
      </div>
    </div>
  )
}

export default AdminLogin
