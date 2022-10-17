import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import Offer from './Pages/Offers/Offer'
import ForgotPassword from'./Pages/Sign/ForgotPassword'
import SignIn from'./Pages/Sign/SignIn'
import SignUp from'./Pages/Sign/SignUp'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/Offers" element={<Offer />} />
        <Route path="/profile" exact={true} element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App