import { getAuth } from 'firebase/auth';
import React,{useState} from 'react'
import { useNavigate } from 'react-router';

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name:"Abdul",
    email:"Abdul@example.com",
   
  });

  const {name , email} = formData;

const signOut = () =>{
  auth.signOut()
  navigate("/")
}

  return (
    <>
      <section>
        <h1 className='text-3xl font-serif text-center mt-8 font-semibold'>Profile</h1>
        <div className="form-container flex items-center justify-center ">
          <form className='w-full sm:w-[70%] md:w-[60%] lg:w-[40%] p-4 flex flex-col gap-2'>
            <input type="text" id='name' value={name} placeholder='name' disabled className='w-full rounded outline-none text-gray-600 border-gray-400 text-sm'/>
            <input type="email" id='email' value={email} placeholder='email' disabled className='w-full rounded outline-none text-gray-600 border-gray-400 text-sm'/>
            <div className="edit-profile flex justify-between items-center px-2">
              <p className='text-sm text-gray-600'>Do you want to change your profile?<span className='text-red-700 cursor-pointer'>Edit</span></p> 
              <p onClick={signOut} className='text-sm text-blue-500 cursor-pointer hover:text-red-700'>Sign Out</p> 
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Profile