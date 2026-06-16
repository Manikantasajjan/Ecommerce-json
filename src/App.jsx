import React from 'react'
import Homepage from './pages/Homepage'
import AdminLogin from "./pages/AdminLogin"
import AdminDashboard from './pages/AdminDashboard'
import {Routes, Route} from "react-router-dom"
import AddedProducts from './Pages/AddedProducts'
import UserSignup from './Pages/UserSignup'
import UserLogin from './Pages/UserLogin'
import UserDashboard from './Pages/UserDashboard'
import ProductDetail from './Pages/ProductDetail'
import OrderDetails from './Pages/OrderDetails'


const App = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
        <Route path='/addedproducts' element={<AddedProducts/>}/>
        <Route path='/usersignup' element={<UserSignup/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/userdashboard' element={<UserDashboard/>}/>
        <Route path='/productdetail/:id' element={<ProductDetail/>}/>
        <Route path='/orderdetails/:id' element={<OrderDetails/>}/>
      </Routes> 
    </>
  )
}

export default App