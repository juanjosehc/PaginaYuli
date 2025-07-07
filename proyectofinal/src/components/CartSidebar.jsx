import { useCart } from '../context/CartContext'
import { useState } from 'react'
import Alert from '@mui/material/Alert'
import Collapse from '@mui/material/Collapse'

const CartSidebar = ({ isOpen, onClose }) => {
  const {
    cart,
    total,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart
  } = useCart()

  const [showSuccess, setShowSuccess] = useState(false)

  const handlePay = () => {
    setShowSuccess(true)
    clearCart()

    setTimeout(() => {
      setShowSuccess(false)
      onClose()
    }, 3000)
  }

  const isMaxStockReached = (item) => item.quantity >= item.stock

  return (
    <div
      className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg border-l border-gray-200 p-4 overflow-y-auto z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">🛒 Carrito</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-lg">✖</button>
      </div>

      <Collapse in={showSuccess}>
        <Alert severity="success" className="mb-4">¡Gracias por tu compra! 🛍️</Alert>
      </Collapse>

      {cart.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item._id} className="border-b pb-2">
                <p className="font-semibold">{item.name}</p>
                <div className="flex justify-between items-center mt-1">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item._id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      onClick={() => !isMaxStockReached(item) && increaseQuantity(item._id)}
                      disabled={isMaxStockReached(item)}
                      className={`px-2 py-1 rounded ${isMaxStockReached(item)
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-gray-200 hover:bg-gray-300'}`}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm font-bold">
                    ${(item.price * item.quantity).toLocaleString('es-CO')}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 text-sm mt-1 hover:underline"
                >
                  Quitar
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 text-right font-bold text-lg">
            Total: ${total.toLocaleString('es-CO')}
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <button
              onClick={clearCart}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Vaciar carrito
            </button>

            <button
              onClick={handlePay}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Pagar todo
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default CartSidebar
