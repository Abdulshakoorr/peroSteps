import React from 'react'
import { Outlet,Navigate } from 'react-router'
import { Authe } from '../Hooks/Authe'
const PrivateRout = () => {
    const {loggedIn, checkingStatus } = Authe();

    if (checkingStatus) {
      return <h1>Loading...</h1>
    }
     return (
    <>
        loggedIn? <Outlet/> : <Navigate to= "/sign-in" />
    </>
  )
}

export default PrivateRout