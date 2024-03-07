import React from 'react';

export default function Form() {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=600)'}}>
      
    <div className="hero-overlay  bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="">
        
      <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
        <h4 className='text-white text-center tracking-widest'>TEST AND CRUNCHY</h4>
<br />
<h1 className='text-6xl text-white text-center font-semibold tracking-widest'>RESERVATIONS</h1>
<br />
<h1 className='text-white text-xl text-center px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sint temporibus facere ipsam quisquam at ullam aut. Unde tempora perferendis et cum, sunt perspiciatis provident eveniet asperiores, fugiat ipsa velit!</h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-raw flex-col lg:flex-row-reverse justify-center items-center flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative bg-white">
              
                <input placeholder= "NAME*" type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative bg-white">
               
                <input placeholder= "PHONE*" type="TEXT" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative bg-white">
               
                <input type="date" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative bg-white">
                
                <input placeholder= "TIME*" type="text" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative bg-white">
                
                <input placeholder= "SEATS*" type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-1/2 ">
              <div className="relative bg-white">
                
                <input placeholder= "E-mail" type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative bg-white">
                <textarea placeholder= "NOTES" id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
            <button className="btn size-50 text-white  btn-outline rounded-none border-white">RESURVE</button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
    </div>
  </div>
  );
}
