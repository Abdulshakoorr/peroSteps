import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import "./styles.css";

// import required modules
import { Pagination,Autoplay } from "swiper";

const HeroSlider = () => {
  return (
    <div className='container background w-full h-[90vh] flex items-center justify-end'>
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
      <SwiperSlide className='h-[80vh]'>
        <img src="https://images.pexels.com/photos/2091166/pexels-photo-2091166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         alt="" className='w-full h-[80%] mx-auto rounded shadow-xl shadow-black mt-8 contain center'/>
      </SwiperSlide>
    </Swiper>
  </div>
  )
}

export default HeroSlider;



