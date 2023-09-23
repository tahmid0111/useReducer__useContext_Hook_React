import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='text-center pt-10 pb-20'>
        <Link className='px-10 py-5 text-2xl text-white hover:text-yellow-500 duration-300' to='/reducer'>useReducer Hook</Link>
        <Link className='px-10 py-5 text-2xl text-yellow-500 hover:text-white duration-300' to='/context'>useContext Hook</Link>
      </header>
    </>
  )
}

export default Header
