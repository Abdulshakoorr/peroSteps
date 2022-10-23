import React from 'react'

const AboutComp1 = () => {
  return (
    <>
      <div className='bg-white lg:mx-auto h-[80%] px-4 md:px-64 py-8'>
        <h2 className='text-2xl font-serif font-bold md:text-5xl'>Who We Are?</h2>
        <div className="w-full about-text-img flex items-center justify-center gap-8 sm:flex-nowrap flex-wrap">
          <div className="img lg:w-1/2 md:w-2/3 w-full p-4 basis-2/4">
            <img src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className='rounded cover'/>
          </div>
          <div className="text-box flex flex-col basis-2/4 text-left">
            <h2 className='text-xl sm:text-2xl font-semibold mb-4 text-center'> We are the most trusted!</h2>
            <p className='text-xs sm:text-sm '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas deserunt quibusdam, maxime iste eveniet odit modi tempora ab fugit sint a veniam assumenda quae voluptates sit soluta vel repellendus. Perspiciatis</p>
            <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas deserunt quibusdam, maxime iste eveniet odit modi tempora ab fugit sint a veniam assumenda quae voluptates sit soluta vel repellendus. Perspiciatis</p>
          </div>
        </div>
      </div>
      <div className='bg-white lg:mx-auto h-[80%] px-4 md:px-64 py-8'>
        <div className="about-text-img flex items-center justify-center gap-8 sm:flex-nowrap flex-wrap">
          <div className="text-box flex flex-col basis-2/4 text-left">
            <h2 className='text-xl sm:text-2xl font-semibold mb-4'> We love to build!</h2>
            <p className='text-xs sm:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas deserunt quibusdam, maxime iste eveniet odit modi tempora ab fugit sint a veniam assumenda quae voluptates sit soluta vel repellendus. Perspiciatis</p>
          </div>
          <div className="img lg:w-1/2 md:w-2/3 w-full p-4 basis-2/4">
            <img src="https://images.unsplash.com/photo-1546552356-3fae876a61ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" alt="" className='rounded cover'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutComp1