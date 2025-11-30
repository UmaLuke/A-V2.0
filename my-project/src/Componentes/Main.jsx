  import React from 'react'

  const Main = () => {
    return (
      <main className="container mx-auto p-4">
        <section id="home" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Bienvenido a Bar del Sol</h2>
          <p className="text-gray-700">Disfruta de nuestras bebidas y ambiente relajado.</p>
        </section>
        <section id="menu" className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Nuestro Menú</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow-md rounded">
              <h4 className="font-bold">Cerveza Artesanal</h4>
              <p>$5.00 - Refrescante y local.</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded">
              <h4 className="font-bold">Cóctel Margarita</h4>
              <p>$8.00 - Clásico y delicioso.</p>
            </div>
          </div>
        </section>
      </main>
    )
  }

  export default Main
  