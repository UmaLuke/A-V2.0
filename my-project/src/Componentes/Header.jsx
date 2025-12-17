  import React from 'react'
  import Nav from './Nav'
  import { Link } from 'react-router-dom'
  const Header = () => {
    return (
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-bold text-2xl">Antony's Bar</h1>
          <Nav />
        </div>
      </header>
    )
  }

  export default Header