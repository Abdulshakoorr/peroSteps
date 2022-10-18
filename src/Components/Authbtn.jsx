import React from 'react'
import {FcGoogle} from 'react-icons/fc'
const Authbtn = () => {
  return (
    <button className='flex px-4 gap-2 items-center justify-center w-full mt-4 bg-green-600 py-2 rounded shadow hover:bg-green-800 transition duration-500 ease-in-out hover:shadow-lg active:bg-green-900 text-rose-50'>
        <FcGoogle className='bg-white rounded-full'/>
        Continue With Google
    </button>
  )
}

export default Authbtn