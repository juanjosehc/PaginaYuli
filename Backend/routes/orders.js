import express from 'express'

const router = express.Router()

// Ruta de prueba para pedidos
router.get('/', (req, res) => {
  res.send('Ruta de pedidos funcionando')
})

export default router
