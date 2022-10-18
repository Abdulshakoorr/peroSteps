import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import Authbtn from '../../Components/Authbtn';
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: '',
  });
  const { name, email, password } = formData;

  function handleInput(e) {
    const id = e.target.id;
    const value = e.target.value;
    setFormData({...formData, [id]: value });
    // setFormData((prevState) => ({ ...prevState,[e.target.id]: e.target.value,}));
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">
        Sign Up
      </h1>
      <div className="sign-in-container w-full mx-auto p-8 items-center justify-center flex gap-8 flex-wrap mt-8">
        <div className=' lg:w-[40%] md:w-[60%] sm:w-[50%] shadow-md relative'>
          <img src="../../../images/signup.png" alt="sign up img"  className='h-full w-full cover'/>
        </div>
        <div className="form px-16 lg:w-[50%] md:w-[60%] sm:w-[50%]">
          <form>

            <input type="text" id="name" autoComplete='off' placeholder='Enter full name' value={name} onChange={handleInput} className="w-full px-4 py-2 text-md outline-none transition ease-in-out border-gray-300 focus:border-gray-300 rounded mb-4"/>
            <input type="email" id="email" autoComplete='off' placeholder='Enter email' value={email} onChange={handleInput} className="w-full px-4 py-2 text-md outline-none transition ease-in-out border-gray-300 focus:border-gray-300 rounded"/>
            <div className="password mt-4 relative">
              <input type={ showPassword ? 'text' :'password'} id="password" autoComplete='off' placeholder='Enter password' value={password} onChange={handleInput} className="w-full px-4 py-2 text-md outline-none transition ease-in-out border-gray-300 focus:border-gray-300 rounded"/>
              <span className='absolute right-2 top-3' onClick={()=> setShowPassword(!showPassword)}>
                {
                  showPassword? <AiFillEye/>  :<AiFillEyeInvisible/>
                }
              </span>
            </div>
            <div className="link-components px-2 text-center text-sm flex justify-between mt-6 flex-wrap">
              <p className='text-gray-600'>have an account?
                <Link to="/sign-in" className='text-blue-600'>Sign In</Link>
              </p>
              <p className='text-blue-600'>
                <Link to="/forgot-password"> Forgot password?</Link>
              </p>
            </div>
            <button type='submit' className='w-full text-center bg-blue-600 text-white px-6 py-2 rounded font-medium mt-4 uppercase shadow-xl hover:bg-blue-700 transition duration-200 ease-in-out'>Sign Up</button>
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

export default SignUp;