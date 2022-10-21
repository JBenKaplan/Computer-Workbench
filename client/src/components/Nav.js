import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/parts">Workbench</Link>
      <Link to="/parts/create">New Part</Link>
    </nav>
  )
}

export default Nav
