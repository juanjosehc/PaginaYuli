import { useLocation } from 'react-router-dom'
import useProducts from '../hooks/useProducts'
import { useCart } from '../context/CartContext'

const Home = () => {
  const { products, loading } = useProducts()
  const { cart, addToCart } = useCart()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)
  const searchQuery = queryParams.get('search')?.toLowerCase() || ''

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery)
  )

  if (loading) return <p className="p-4">Cargando productos...</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {filteredProducts.length === 0 ? (
        <p className="col-span-full text-center text-gray-600">No se encontraron productos.</p>
      ) : (
        filteredProducts.map(product => {
          const cartItem = cart.find(item => item._id === product._id)
          const quantityInCart = cartItem?.quantity || 0
          const isOutOfStock = quantityInCart >= product.stock

          return (
            <div key={product._id} className="border rounded-lg p-4 shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-2 rounded"
                onError={(e) => { e.target.src = '/fallback.jpg' }}
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">Precio: ${product.price}</p>
              <p className={`text-sm ${isOutOfStock ? 'text-red-500' : 'text-gray-500'}`}>
                Stock disponible: {product.stock - quantityInCart}
              </p>
              <button
                onClick={() => addToCart(product)}
                disabled={isOutOfStock}
                className={`mt-2 w-full px-4 py-2 rounded transition font-medium
                  ${isOutOfStock
                    ? 'bg-gray-400 cursor-not-allowed text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'}
                `}
              >
                {isOutOfStock ? 'Sin stock disponible' : 'Agregar al carrito'}
              </button>
            </div>
          )
        })
      )}
    </div>
  )
}

export default Home

