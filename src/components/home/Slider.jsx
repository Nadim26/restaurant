import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import slide1img from '../../asset/bg1.jpg';
import slide2img from '../../asset/bg2.jpg';
import slide3img from '../../asset/bg3.jpg';
import Navbar from '../../Shared/Navbar/Navbar';
import './Slider.css';
export default function Slider() {
  return (
    <AwesomeSlider className='min-h-screen h-screen '>

    <div className="h-50 " style={{backgroundImage: `url(${slide1img})`, backgroundSize: "cover",
            backgroundPosition: "center", animation: "zoomInOut 10s infinite alternate"}}>
        <h4 className='text-white text-center tracking-widest'>TEST AND CRUNCHY</h4>
        <br />
        <h1 className='text-9xl text-white text-center tracking-widest'>RESTAURANT</h1>
        <br />
        <h1 className='text-white text-s text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sint temporibus facere ipsam quisquam at ullam aut. <br></br>Unde tempora perferendis et cum, sunt perspiciatis provident eveniet asperiores, fugiat ipsa velit!</h1>
        <br />
        <div className='flex justify-center items-center  '>
        <h1 className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-center bg-white text-black  rounded-none border-none ">VIEW OUR MENU</h1>
        </div>
    </div>
   
    <div className="h-50 " style={{backgroundImage: `url(${slide2img})`,backgroundSize: "cover",
            backgroundPosition: "center", animation: "zoomInOut 10s infinite alternate"}}>
        <h4 className='text-white text-center tracking-widest'>WINE AND DINE</h4>
        <br />
        <h1 className='text-9xl text-white text-center tracking-widest'>ENJOYABLE</h1>
        <br />
        <h1 className='text-white text-s text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sint temporibus facere ipsam quisquam at ullam aut. Unde tempora perferendis et cum, sunt perspiciatis provident eveniet asperiores, fugiat ipsa velit!</h1>
        <br />
        <div className='flex justify-center items-center  '>
        <h1 className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-center bg-white text-black  rounded-none border-none ">VIEW OUR MENU</h1>
        </div>
    </div>
    
    <div className="h-50 " style={{backgroundImage: `url(${slide3img})`,backgroundSize: "cover",
            backgroundPosition: "center", animation: "zoomInOut 10s infinite alternate"}}>
        <h4 className='text-white text-center tracking-widest'>CRISPY AND SOFT</h4>
        <br />
        <h1 className='text-9xl text-white text-center tracking-widest'>DELICIOUS</h1>
        <br />
        <h1 className='text-white text-s text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sint temporibus facere ipsam quisquam at ullam aut. Unde tempora perferendis et cum, sunt perspiciatis provident eveniet asperiores, fugiat ipsa velit!</h1>
        <br />
        <div className='flex justify-center items-center  '>
        <h1 className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-center bg-white text-black  rounded-none border-none ">VIEW OUR MENU</h1>
        </div>


        {/* <h1 className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-white rounded-none text-center text-white '> VIEW OUR MENU </h1> */}
    </div>

    
  </AwesomeSlider>
  )
}
