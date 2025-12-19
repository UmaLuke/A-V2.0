import React from 'react';

// TUS DATOS DE PRODUCTOS
const products = [
  {
    id: 1,
    name: 'Hamburguesa Clásica',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', // Puse una foto de hamburguesa de ejemplo
    imageAlt: "Hamburguesa con queso y lechuga",
    price: '$1200',
    color: 'Con papas',
  },
  {
    id: 2,
    name: 'Pizza Especial',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    imageAlt: "Pizza con mucho queso",
    price: '$1500',
    color: 'Masa madre',
  },
  // ... puedes agregar más aquí
];

const Menu = () => {
  return (
    <section id="menu" className="py-12 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nuestro Menú</h2>
            <p className="text-lg text-gray-600">
              ¡Aquí pronto verás nuestras deliciosas opciones! 🍔🍕
              <br/>
              (Elige tu favorita y pídela ahora)
            </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
              
              {/* Imagen del producto */}
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-auto lg:h-64">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>

              {/* Información del producto */}
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-lg font-medium text-blue-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Menu