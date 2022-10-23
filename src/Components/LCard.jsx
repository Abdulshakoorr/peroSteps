import React from 'react'

const LCard = ({img,title,id,desc,location}) => {
  return (
    <div>
      <div key={id}>
        <img src={img} className='w-full rounded' />
        <h2 className='text-md'>{title}</h2>
        <p className='text-xs py-2'>{location}</p>
        <p className='text-xs mt-2'>{desc}</p>
      </div>
    </div>
  )
}

export default LCard