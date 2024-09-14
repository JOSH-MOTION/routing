import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className="text-white flex justify-center gap-x-5">
        
<Link to='/' className=''>Home</Link>
<Link to='/about'>about</Link>
<Link to='/services'>service</Link>
<Link to='/userprofile'>Profile</Link>

    </div>
  )
}

export default Navbar