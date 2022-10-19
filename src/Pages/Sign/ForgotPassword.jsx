import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Authbtn from '../../Components/Authbtn';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  function handleInput(e) {
    setEmail(e.target.value)
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">
        Forgot Password
      </h1>
      <div className="sign-in-container w-full mx-auto p-8 items-center justify-center flex gap-8 flex-wrap mt-8">
        <div className=' lg:w-[40%] md:w-[60%] sm:w-[50%] shadow-md relative'>
          {/* <div className="dot rounded-full -z-10 md:w-24 md:h-24 bg-red-400 absolute -top-16 -left-4 shadow-xl">

          </div> */}
          <img src="../../../images/forgotpassword.png" alt="forgotpassword"  className='h-full w-full cover'/>
        </div>
        <div className="form px-16 lg:w-[50%] md:w-[60%] sm:w-[50%]">
          <form>

            <input type="email" id="email" autoComplete='off' placeholder='Enter email' value={email} onChange={handleInput} className="w-full px-4 py-2 text-md outline-none transition ease-in-out border-gray-300 focus:border-gray-300 rounded" required/>
            <div className="link-components px-2 text-center text-sm flex justify-between mt-6 flex-wrap">
              <p className='text-gray-600'>Don't have an account?
                <Link to="/sign-up" className='text-blue-600'>Register</Link>
              </p>
              <p className='text-blue-600'>
                <Link to="/sign-in"> Sign In</Link>
              </p>
            </div>
            <button type='submit' className='w-full text-center bg-blue-600 text-white px-6 py-2 rounded font-medium mt-4 uppercase shadow-xl hover:bg-blue-700 transition duration-200 ease-in-out'>Send reset password</button>
            <div className="or mt-2 flex items-center before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className='text-center px-6'>
                OR
              </p>
            </div>
              <Authbtn/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword;