import React from 'react'
import loading from '../assets/svg/loading.svg'
const Spiner = () => {
  return (
    <div>
        <div className="spinner flex items-center justify-center h-[100vh] bg-black-700">
            <img src={loading} alt="loading...." className='h-24 z-50'/>
        </div>
    </div>
  )
}

export default Spiner