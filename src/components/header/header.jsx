import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Link to='/reducer'>See useReducer Hook</Link>
      <Link to='/context'>See useContext Hook</Link>
    </>
  )
}

export default Header
