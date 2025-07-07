import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dns from 'dns'
import productRoutes from './routes/products.js'
import orderRoutes from './routes/orders.js'
import authRoutes from './routes/auth.js'

// Configuración de DNS (solo si estás en Windows + IPv6 desactivado)
dns.setDefaultResultOrder('ipv4first')

// Inicializar app
const app = express()

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))
app.use(express.json())

// Rutas
app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)

// Conexión MongoDB
mongoose.connect('mongodb+srv://yuliagucaa:Alejo1004.@cluster0.fxeqohq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('✅ Conectado a MongoDB Atlas')

    // Iniciar servidor
    const PORT = 5000
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
    })
  })
  .catch(err => console.error('❌ Error al conectar a MongoDB Atlas:', err))

// Ruta raíz para verificar el servidor
app.get('/', (req, res) => {
  res.send('Servidor backend funcionando')
})
