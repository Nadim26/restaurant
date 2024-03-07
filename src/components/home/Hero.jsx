import React from 'react';

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-purple-100 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-image-4.jpg" className="max-w-sm rounded-lg " />
        
        <div className=''>
          <h1 className='text-black tracking-widest'> TASTY AND CRUNCHY</h1>
          <br />
          <h1 className="text-6xl text-black font-semibold tracking-widest">INGREDIENTS</h1>
          <p className="py-6 font-thin text-xl text-black ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae non necessitatibus modi iure? Earum mollitia natus delectus consequuntur, reiciendis illo ea explicabo unde sit, rem eos voluptas iure voluptates placeat.</p>
          <h1 className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-center bg-white text-black  rounded-none border-none ">VIEW OUR MENU</h1>  
        </div>
      </div>
    </div>
  );
}
