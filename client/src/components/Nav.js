import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/parts/all')}>All Parts</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </nav>
  )
}

export default Nav
