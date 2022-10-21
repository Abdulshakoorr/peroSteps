import React from 'react'
import { Outlet,Navigate } from 'react-router'
import { Authe } from '../Hooks/Authe'
import Spiner from './Spiner';
const PrivateRout = () => {
    const {loggedIn, checkingStatus } = Authe();

    if (checkingStatus) {
      return <Spiner/>
    }
     return loggedIn? <Outlet/> : <Navigate to= "/sign-in" />
   
}

export default PrivateRout