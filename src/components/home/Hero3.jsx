import React from 'react';

export default function Hero3() {
  return (
    <div className='flex flex-col lg:flex-row justify-center bg-white'>
      <ul className="menu my-auto bg-white w-96 items-center p-0 [&_li>*]:rounded-none text-2xl">
        <li><a className='text-lg text-right text-black tracking-widest'>CHEESE CROISSANTS</a></li>
        <li><a className='text-lg text-right text-black tracking-widest'>BRUSCHETTI</a></li>
        <li><a className='text-lg text-right text-black tracking-widest'>AWESOME VEGETABLES</a></li>
        <li><a className='text-lg text-right text-black tracking-widest'>CHEESE CROISSANTS</a></li>
        <li><a className='text-lg text-right text-black tracking-widest'>BRUSCHETTI</a></li>
        <li><a className='text-lg text-right text-black tracking-widest'>AWESOME VEGETABLES</a></li>
      </ul>
      
      <div className="h-50 hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-tab-image1.jpg" className="size-15 rounded-none" />
          <div>
           
            <h1 className="text-4xl text-black font-semibold tracking-widest">TODAY’S MENU</h1>
            <p className="py-6 font-thin text-2xl text-slate-300 ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
        
         <p className='py-6 pt-4 font-thin text-xl text-slate-300'>Ut enim ad minim veniam, sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur osint ccaecat cupidatat.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
