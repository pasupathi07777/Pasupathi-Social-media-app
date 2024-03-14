import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({search,setsearch} ) => {
  return (
    <div className='navbar'>
      <form action="" className='navbar-form' onSubmit={(e)=>e.preventDefault()}>
        {/* <label htmlFor=""></label> */}
        <input type="text" placeholder='Search' value={search} onChange={(e)=>setsearch(e.target.value)} id='nav-search' />
      </form>
      <ul className='nav-links'>
        <li className='links'><Link to={'/'}>Home</Link></li>
        <li className='links'><Link to={'Addpost'}>post</Link></li>
        <li className='links'><Link to={'About'}>about</Link></li>
      </ul>
    </div>
  )
}

export default Navbar