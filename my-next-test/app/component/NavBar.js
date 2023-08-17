import Link from 'next/link'
import React from 'react'
// nav link ==========================||
const NavBar = () => {
  return (
    <div className='flex '>
      <Link href="/" >Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Post</Link>
    </div>
  )
}

export default NavBar
