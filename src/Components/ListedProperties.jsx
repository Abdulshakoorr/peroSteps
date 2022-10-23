import React from 'react'
import LCard from './LCard'
import data from '../APIData'
const ListedProperties = () => {
  return (
    <>
    <h2 className='text-2xl text-center bg-white font-serif font-semibold'>Listed Properties</h2>
      <div className='px-4 sm:px-16 py-4 bg-white h-[100%] items-center justify-center flex flex-wrap gap-2 '>
          {
            data.map((item)=>{
              return <>
                  <div className=' p-4 w-[80%] sm:w-[40%] lg:w-[24%] rounded shadow-xl flex items-center justify-center'>
                      <LCard id={item.id} img={item.img} title={item.title} desc={item.description} location={item.location}/>
                  </div>
                  </>
              })
            }
      </div>
    </>
  )
}

export default ListedProperties