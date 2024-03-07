import React from 'react';

export default function Pic() {
  return (
    <div className='flex flex-row flex-wrap justify-center items-center bg-white p-5'>
      <div className="card card-compact md:w-110 md:h-96 lg:w-128 lg:h-96 rounded-none m-2">
        <figure><img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-image-1.jpg" alt="Shoes" className="w-full h-full object-cover" /></figure>
      </div>
      <div className="card card-compact md:w-110 md:h-96  lg:w-128 lg:h-96 rounded-none m-2">
        <figure><img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-image-2.jpg" alt="Shoes" className="w-full h-full object-cover" /></figure>
      </div>
    </div>
  );
}

