  import React from 'react'

  const Nav = () => {
    return (
      <nav className="bg-gray-800 text-white p-4">
        <ul className="container mx-auto flex space-x-4">
          <li><a href="#home" className="hover:text-blue-400">Inicio</a></li>
          <li><a href="#menu" className="hover:text-blue-400">Menú</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contacto</a></li>
        </ul>
      </nav>
    )
  }

  export default Nav
  