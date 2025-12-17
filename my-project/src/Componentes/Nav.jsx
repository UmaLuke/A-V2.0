import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    // h-screen: altura completa
    // w-64: ancho fijo
    // flex-col: elementos uno debajo del otro
    <nav className="bg-gray-800 text-white w-64 min-h-screen p-6 flex flex-col">
      
      {/* Puedes poner el logo aquí si quieres que esté en la barra */}
      <div className="mb-8 text-2xl font-bold text-blue-400">
        Antony's Bar
      </div>

      <ul className="flex flex-col space-y-4">
        <li>
          <Link to="/" className="block p-2 hover:bg-gray-700 rounded">
            🏠 Inicio
          </Link>
        </li>
        <li>
          <Link to="/menu" className="block p-2 hover:bg-gray-700 rounded">
            🍔 Menú
          </Link>
        </li>
        <li>
          <Link to="#" className="block p-2 hover:bg-gray-700 rounded">
            📞 Contacto
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav