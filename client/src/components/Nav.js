import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/parts/all">All Parts</Link>
      <Link to="/parts/create">New Part</Link>
      <Link to="/wb/create">New Bench</Link>
    </nav>
  )
}

export default Nav
