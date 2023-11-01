import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar bg-base-100 p-5 my-5'>
      <div className='flex'>
        <a className="btn btn-ghost normal-case text-xl">Im Bored" Hi Bored, Im Dad</a>
      </div>
      <Link className='btn' href='/doSomething'>Do something</Link>
      <Link className='btn' href='/brainStorm'>BrainStorm</Link>
    </div>
  )
}

export default NavBar