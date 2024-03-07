import React from 'react'

export default function NaVbar1() {
  return (
    <div>
    <nav className='w-full fixed top-0 bg-white'>
        <div className='container mx-auto py-5 flex justify-between'>
            <div className='flex items-center gap-2'>
                <img className='w-5' src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/meni-logo-light.png" alt="" />

            </div>
            <div>
                <ul>
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
            
            <span>3</span>

        </div>
    </nav>
</div>
  )
}
