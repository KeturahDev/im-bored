import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar bg-base-100 p-5 my-5'>
      <div className='flex-1'>
        <Link className="btn btn-ghost normal-case text-xl" href='/'>Fix The Boredom</Link>
      </div>
      <div className='flex-none'>
      <Link className='btn btn-primary' href='/do-something'>Do something</Link>
      <Link className='btn btn-ghost' href='/brainstorm'>BrainStorm</Link>
      </div>
    </div>
  )
}

export default NavBar