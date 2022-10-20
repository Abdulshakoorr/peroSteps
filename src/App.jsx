import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import Offer from './Pages/Offers/Offer'
import ForgotPassword from'./Pages/Sign/ForgotPassword'
import SignIn from'./Pages/Sign/SignIn'
import SignUp from'./Pages/Sign/SignUp'
import Header from './Components/Header'
import PrivateRout from './Components/PrivateRout';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/Offers" element={<Offer />} />
        <Route path='/profile' element={<PrivateRout/>}>
          <Route path="/profile" exact={true} element={<Profile />} />
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    </>
  )
}

export default App