import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'

export const Authe = () => {
    const [loggedIn ,setLoggedIn] = useState(false)
    const [checkingStatus ,setCheckingStatus] = useState(true);


    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user)=>{
            if (user){
                setLoggedIn(true)
            }
            setCheckingStatus(false)
        },[])
    })
  return {loggedIn , checkingStatus}
}

 