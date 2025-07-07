import { useState, useRef, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const [search, setSearch] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' })
  const [user, setUser] = useState(null)

  const suggestionsRef = useRef()

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearch(value)
    setSuggestions(
      productNames.filter(name =>
        name.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5)
    )
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (search.trim() !== '') {
      navigate(`/?search=${search.trim()}`)
      setSuggestions([])
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.message)

      localStorage.setItem('token', data.token)
      setUser(data.user)
      setShowLogin(false)
      alert('✅ Inicio de sesión exitoso')

    } catch (err) {
      alert(`❌ Error: ${err.message}`)
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerData)
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.message)

      alert('✅ Registro exitoso. Ahora puedes iniciar sesión.')
      setShowRegister(false)

    } catch (err) {
      alert(`❌ Error: ${err.message}`)
    }
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target)) {
        setSuggestions([])
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <nav className="bg-blue-600 text-white px-4 py-3 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <Link to="/" className="text-xl font-bold hover:underline">
          Tienda De Panes
        </Link>

        <form
          onSubmit={handleSearchSubmit}
          className="relative w-full md:max-w-xs"
          ref={suggestionsRef}
        >
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Buscar Nombre..."
            className="px-3 py-1 rounded-md text-black w-full"
          />
          {suggestions.length > 0 && (
            <ul className="absolute bg-white text-black mt-1 rounded-md shadow-md z-50 w-full max-w-xs">
              {suggestions.map((s, i) => (
                <li
                  key={i}
                  onClick={() => {
                    navigate(`/?search=${s}`)
                    setSearch(s)
                    setSuggestions([])
                  }}
                  className="px-3 py-1 hover:bg-blue-100 cursor-pointer"
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </form>

        <div className="flex gap-2">
          {user ? (
            <span className="font-medium">👋 Hola, {user.name}</span>
          ) : (
            <>
              <button
                onClick={() => setShowLogin(true)}
                className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-1 rounded-md font-medium"
              >
                Iniciar sesión
              </button>
              <button
                onClick={() => setShowRegister(true)}
                className="bg-green-600 text-white hover:bg-green-700 px-4 py-1 rounded-md font-medium"
              >
                Registrarse
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Modal Login */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96 shadow-lg relative">
            <h2 className="text-lg font-bold mb-4">Iniciar sesión</h2>
            <form onSubmit={handleLogin} className="space-y-3">
              <input
                type="email"
                placeholder="Correo"
                value={loginData.email}
                onChange={e => setLoginData({ ...loginData, email: e.target.value })}
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={loginData.password}
                onChange={e => setLoginData({ ...loginData, password: e.target.value })}
                className="w-full border rounded px-3 py-2"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded"
              >
                Entrar
              </button>
            </form>
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              ✖
            </button>
          </div>
        </div>
      )}

      {/* Modal Registro */}
      {showRegister && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96 shadow-lg relative">
            <h2 className="text-lg font-bold mb-4">Registrarse</h2>
            <form onSubmit={handleRegister} className="space-y-3">
              <input
                type="text"
                placeholder="Nombre"
                value={registerData.name}
                onChange={e => setRegisterData({ ...registerData, name: e.target.value })}
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="email"
                placeholder="Correo"
                value={registerData.email}
                onChange={e => setRegisterData({ ...registerData, email: e.target.value })}
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={registerData.password}
                onChange={e => setRegisterData({ ...registerData, password: e.target.value })}
                className="w-full border rounded px-3 py-2"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded"
              >
                Crear cuenta
              </button>
            </form>
            <button
              onClick={() => setShowRegister(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar

