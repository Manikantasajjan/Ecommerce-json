import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddedProducts = () => {
    const [products,setProducts] =useState([])

    let navigate = useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then((x)=>setProducts(x.data))
        .catch(err=>console.log(err))
    },[])

  return (
    <>
    {/* <div style={{background:"linear-gradient(to right, rgb(66, 132, 117), rgb(137, 215, 183))", height:"75px"}}>
      <Link to={'/homepage'}><h2>Back to HomePage</h2></Link>
    </div> */}
    <button onClick={()=>{navigate("/admindashboard")}}>Dashboard</button>
      <center><h1>Products List</h1></center>
      {products.map((x)=>{
        return <div>
           <img src={x.image} height={"200px"} width={"200px"}alt="" />
        </div>
    })
  }
    </>
  )
}

export default AddedProducts
