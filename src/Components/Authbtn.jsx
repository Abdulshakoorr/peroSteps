import { async } from '@firebase/util'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc ,serverTimestamp,setDoc } from 'firebase/firestore'
import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { db } from '.././firebaseConfig'

const Authbtn = () => {
const navigate = useNavigate()
const ongoogleClick = async ()=>  {
    try {
      const auth = getAuth();
      const provider =new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      
      const docRef = doc(db,'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
        navigate("/");
    } catch (error) {
      toast.error('did not authorized with google');
      console.log(error);
    }
  }


  return (
    <button
    type='button' onClick={ongoogleClick}
    className='flex px-4 gap-2 items-center justify-center w-full mt-4 bg-green-600 py-2 rounded shadow hover:bg-green-800 transition duration-500 ease-in-out hover:shadow-lg active:bg-green-900 text-rose-50'>
        <FcGoogle className='bg-white rounded-full'/>
        Continue With Google
    </button>
  )
}

export default Authbtn;