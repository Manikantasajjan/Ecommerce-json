import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const AdminDashboard = () => {
    const [id,setId] =useState("")
    const [name,setName] =useState("")
    const [category,setCategory] =useState("")
    const [price,setPrice] =useState("")
    const [description,setDescription] =useState("")
    const [image,setImage] =useState("")
    const [rating,setRating] =useState("")
    const inputRef =useRef(null)


    let navigate = useNavigate()

    function handleImage(e){
        let file = e.target.files[0]
        if(file.size>100000){
            toast.error("Choose file size less than 100KB")
            return;
        }
        const reader = new FileReader()

        reader.onloadend = ()=>{
            setImage(reader.result)
        }
        reader.readAsDataURL(file)
    }

    function addProduct (e){
        e.preventDefault()
        const products = {id, name, price, category, description, image, rating}
        axios.post("http://localhost:3000/products",products)
        .then(()=>{
            toast.success("Product Added")
            setId("")
            setName("")
            setPrice("")
            setCategory("")
            setDescription("")
            setImage("")
            setRating("")
            inputRef.current.value = ""
        })
        .catch(err=>toast.error("Failed to Add"))
    }

  return (
    <div>

        <button onClick={()=>{navigate("/addedproducts")}}> View Added Products</button>
        <div className="dashboard">
      <center><h1>Weclome to Dashboard</h1></center>
        <center>ADD PRODUCTS</center>
      <center>
        
        <form onSubmit={addProduct}>
            <input type="text" placeholder='Enter Id' 
            required 
            value={id} 
            onChange={(e)=>{setId(e.target.value)}}/> <br />
            
            <input type="text" placeholder='Enter Product Name' 
            required 
            value={name} 
            onChange={(e)=>{setName(e.target.value)}}/> <br />
            
            <input type="text" placeholder='Enter category' 
            required 
            value={category} 
            onChange={(e)=>{setCategory(e.target.value)}}/><br />
            
            <input type="text" placeholder='Enter Price' 
            required 
            value={price} 
            onChange={(e)=>{setPrice(e.target.value)}}/> <br />
            
            <input type="text" placeholder='Enter Description' 
            required 
            value={description} 
            onChange={(e)=>{setDescription(e.target.value)}} /> <br />
            
            <input type="file" placeholder='Upload image' 
            required
            onChange={handleImage} ref={inputRef}/> <br />
            
            <input type="text" placeholder='Enter Rating' 
            required 
            value={rating} 
            onChange={(e)=>{setRating(e.target.value)}}/><br />
            
            <button>Add</button>
            
        </form>
      </center>
      </div>
    </div>
  )
}

export default AdminDashboard
