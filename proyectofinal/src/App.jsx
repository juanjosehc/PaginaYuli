import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CartSidebar from './components/CartSidebar'
import { useCart } from './context/CartContext'
import AboutPage from './components/AboutUs'
import ContactPage from './components/Contact'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { totalQuantity } = useCart()

  const toggleCart = () => setIsCartOpen(prev => !prev)

  return (
    <>
      <Navbar />

      {/* Contenido principal */}
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>

      {/* Overlay oscuro cuando el carrito está abierto */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleCart}
        />
      )}

      {/* Botón flotante para abrir el carrito */}
      <button
        onClick={toggleCart}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out flex items-center justify-center w-14 h-14"
      >
        🛒
        {totalQuantity > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {totalQuantity}
          </span>
        )}
      </button>
      {/* Sidebar del carrito */}
      <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
    </>
  )
}

export default App
