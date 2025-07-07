import express from 'express'
import Product from '../models/Product.js'

const router = express.Router()

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Agregar un producto
router.post('/', async (req, res) => {
  const { name, price, image } = req.body

  const newProduct = new Product({ name, price, image })

  try {
    const saved = await newProduct.save()
    res.status(201).json(saved)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

export default router
