import express from 'express'
import Order from '../models/Order.js'

const router = express.Router()

// Obtener todas las órdenes
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('products.productId')
    res.json(orders)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Crear una nueva orden
router.post('/', async (req, res) => {
  const { products, total, user } = req.body

  const newOrder = new Order({ products, total, user })

  try {
    const saved = await newOrder.save()
    res.status(201).json(saved)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

export default router
