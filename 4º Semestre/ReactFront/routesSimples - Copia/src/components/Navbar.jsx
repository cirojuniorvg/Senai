import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/cadastro">Cadastro</Link>
      <br />
      <Link to="/estoque">Estoque</Link>
      <br />
      <Link to="/rapidao">Rapidao</Link>
    </nav>
  )
}

export default Navbar
