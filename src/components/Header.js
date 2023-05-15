import React from 'react'

const Header = () => {




  return (
    <header className='bg-black text-white flex justify-between px-7 py-2'>

      <h1>Sample Web</h1>

      <nav className='space-x-7'>

        <a href=''>About</a>
        <a href=''>Contact</a>
      </nav>
    </header>
  )
}

export default Header
