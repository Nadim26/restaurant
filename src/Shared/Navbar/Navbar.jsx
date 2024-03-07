import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <div className="navbar bg-base-100 z-10 bg-opacity-30">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn  btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li>
          <a >PAGES</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><Link to="/portfolio" >PORTFOLIO</Link></li>
        <li><a>BLOG</a></li>
        <li><a>SHOP</a></li>
      </ul>
    </div>
    <div role="button" class="btn btn-ghost w-40 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/meni-logo-light.png" />
        </div>

    {/* <img className="" src='./asset/meni-logo-light.png' alt='logo'></img> */}
    {/* <a className="btn btn-ghost text-xl">logo</a> */}
  </div>
  <div className="navbar-center  hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>HOME</a></li>
      <li>
        <details>
          <summary>PAGES</summary>
          <ul className="p-2 ">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>ELEMENTS</a></li>
      <li><Link to="/portfolio" >PORTFOLIO</Link></li>
      <li><a>BLOG</a></li>
      <li><a>SHOP</a></li>
    </ul>
  </div>
  <div className="navbar-end space-x-3">
     <div className="btn btn-ghost btn-circle indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
  <button class="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
   
    <div className="flex">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
    </div>
    
  </div>
</div>
    </div>
  )
}
