import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
const images = [
    {
      src: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/04/port-gi-1-800x545.jpg',
      alt: 'Image 1',
      caption: 'This is the first image',
      // You can add more properties as needed
    },
    {
      src: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/04/port-gi-5-800x545.jpg',
      alt: 'Image 2',
      caption: 'This is the second image',
      // You can add more properties as needed
    },
    {
        src: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/04/port-gi-1-800x545.jpg',
        alt: 'Image 1',
        caption: 'This is the first image',
        // You can add more properties as needed
      },
      {
        src: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/04/port-gi-5-800x545.jpg',
        alt: 'Image 2',
        caption: 'This is the second image',
        // You can add more properties as needed
      },
      {
        src: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/04/port-gi-1-800x545.jpg',
        alt: 'Image 1',
        caption: 'This is the first image',
        // You can add more properties as needed
      },
      {
        src: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/04/port-gi-5-800x545.jpg',
        alt: 'Image 2',
        caption: 'This is the second image',
        // You can add more properties as needed
      },
    // Add more image objects as needed
  ];
  
export default function Slider2() {
  return (
    <div >
    <Swiper
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="mySwiper bg-white"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },

        992: {
          slidesPerView: 5,
        },
      }}
    >
      {images.map((data, index) => (
        <SwiperSlide key={index}>
          <img className="h-80  rounded-none" src={data.src} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}
