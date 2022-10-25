import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/parts/all')}>All Parts</button>
      <button onClick={() => navigate('/parts/create')}>Create a Part</button>
    </nav>
  )
}

export default Nav
