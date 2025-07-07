// src/hooks/useProducts.js
import { useEffect, useState } from 'react'

const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error al obtener productos:', error)
        setLoading(false)
      })
  }, [])

  return { products, loading }
}

export default useProducts
