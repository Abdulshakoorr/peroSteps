import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import "./styles.css";

// import required modules
import { Pagination,Autoplay } from "swiper";

const HeroSlider = () => {
  return (
    <>
    <h1 className="heading absolute hidden lg:block text-xl sm:text-2xl md:text-lg lg:text-6xl font-bold font-serif top-14 left-64 text-white">“We’re the key <br /> to your new home.”</h1>
      <div className='container  w-full h-[90vh] flex items-center justify-end'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          }
        }}
        modules={[Pagination,Autoplay]}
        className="  w-3/4 mx-auto h-[40vh]"
      >
        <SwiperSlide className='h-[80vh]'>
          <img src="https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="" className='w-full h-[80%] mx-auto rounded shadow-xl shadow-black mt-8 contain center'/>
        </SwiperSlide>
        <SwiperSlide className='h-[80vh]'>
          <img src="https://images.pexels.com/photos/2406441/pexels-photo-2406441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="" className='w-full h-[80%] mx-auto rounded shadow-xl shadow-black mt-8 contain center'/>
        </SwiperSlide>
        <SwiperSlide className='h-[80vh]'>
          <img src="https://images.pexels.com/photos/2972005/pexels-photo-2972005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="" className='w-full h-[80%] mx-auto rounded shadow-xl shadow-black mt-8 contain center'/>
        </SwiperSlide>
        <SwiperSlide className='h-[80vh]'>
          <img src="https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="" className='w-full h-[80%] mx-auto rounded shadow-xl shadow-black mt-8 contain center'/>
        </SwiperSlide>
        <SwiperSlide className='h-[80vh]'>
          <img src="https://images.pexels.com/photos/3639510/pexels-photo-3639510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="" className='w-full h-[80%] mx-auto rounded shadow-xl shadow-black mt-8 contain center'/>
        </SwiperSlide>
        <SwiperSlide className='h-[80vh]'>
          <img src="https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="" className='w-full h-[80%] mx-auto rounded shadow-xl shadow-black mt-8 contain center'/>
        </SwiperSlide>
        <SwiperSlide className='h-[80vh]'>
          <img src="https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="" className='w-full h-[80%] mx-auto rounded shadow-xl shadow-black mt-8 contain center'/>
        </SwiperSlide>
        <SwiperSlide className='h-[80vh]'>
          <img src="https://images.pexels.com/photos/2236394/pexels-photo-2236394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="" className='w-full h-[80%] mx-auto rounded shadow-xl shadow-black mt-8 contain center'/>
        </SwiperSlide>
        <SwiperSlide className='h-[80vh] '>
          <img src="https://images.pexels.com/photos/2091166/pexels-photo-2091166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="" className='w-full h-[80%] mx-auto rounded shadow-xl shadow-black mt-8 contain center'/>
        </SwiperSlide>
      </Swiper>
    </div> 
    <h2 className='block sm:hidden text-3xl -mt-16 mb-4 font-semibold text-center text-white font-serif'>“We’re the key <br /> to your new home.”</h2>
    <p className='text-sm text-white lg:-mt-16 pb-16 shadow-xl shadow-black '>
      Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Perferendis sint possimus iste obcaecati pariatur illum, <br />  recusandae commodi a eius magnam fugit officiis <br />  impedit, minus dolor? Ipsum voluptatem eveniet beatae corporis.
    </p>
  </>
  )
}

export default HeroSlider;



