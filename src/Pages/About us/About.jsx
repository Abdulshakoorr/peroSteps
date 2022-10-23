import React from 'react'
import AboutComp1 from '../../Components/AboutComp1'
const About = () => {
  return (
    <div className='w-[100%] h-[100%] about-bg  '>
      <h1 className='text-4xl pt-16 p-8 md:pt-48 font-serif font-semibold md:pl-40 text-white'>Find better homes<br /> with incredible <br /> construction services.</h1>
      <p className='md:pl-40 p-8 pt-8 pb-28 font-light text-white'>
        Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Dolor architecto magni possimus <br /> maxime cum ut dolorum exercitationem sunt illum excepturi <br /> enim ipsam fuga illo ea recusandae ullam, minima nemo laborum? <br /> Atque laboriosam quisquam iure alias praesentium <br /> tenetur accusantium? Totam, ullam.
      </p>
      <AboutComp1/>
    </div>
  )
}

export default About