import mongoose from 'mongoose'
import dns from 'dns'
import Product from './models/Product.js'

dns.setDefaultResultOrder('ipv4first')

const MONGO_URI = 'mongodb+srv://yuliagucaa:Alejo1004.@cluster0.fxeqohq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('✅ Conectado a MongoDB Atlas')

      const products = [
    { name: 'Pan de Bono', price: 2500, image: 'https://www.mamafoods.com/cdn/shop/files/28cd8e93a292e1b5449fe9cd91b9a00b_8ce566a0-a1c3-446a-ac1b-867c319924c3.png?v=1717004974&width=640', stock: 50 },
    { name: 'Buñuelos', price: 3000, image: 'https://molipeter.com/wp-content/uploads/2023/07/bunuelos-de-maiz.webp', stock: 40 },
    { name: 'Almojábanas', price: 2800, image: 'https://d2j9trpqxd6hrn.cloudfront.net/uploads/recipe/main_image/809/almojabana_colombiana.webp', stock: 35 },
    { name: 'Pan de Yuca', price: 2700, image: 'https://alqueria.com.co/sites/default/files/styles/1327_612/public/2021-12/Pan%20de%20yuca%20de%20bubu_1.jpg?h=8165685c&itok=7siA8zC3', stock: 45 },
    { name: 'Roscones', price: 4500, image: 'https://cdn.colombia.com/gastronomia/2017/01/12/roscon-con-bocadillo-1654.webp', stock: 25 },
    { name: 'Pan Aliñado', price: 3500, image: 'https://img-global.cpcdn.com/recipes/9fe57cd76c98c18e/300x426cq80/receta-de-pan-alinado-colombiano-super-facil-foto-principal.webp', stock: 30 },
    { name: 'Mantecada', price: 3200, image: 'https://mercadobecampo.com/cdn/shop/products/Mantecada_Mesadetrabajo1_80792470-fff8-43f1-a5b9-aeee34ccef4b.jpg?v=1646317710&width=600', stock: 20 },
    { name: 'Croissant', price: 3800, image: 'https://www.infobae.com/resizer/v2/OJP7C7C7LZHOJIGQZLL3TKE42A.jpg?auth=c22db2295026025971f998b6d4a2be4acdd38f3ef4ac544ad780afc445a4eee3&smart=true&width=992&height=558&quality=85', stock: 28 },
    { name: 'Pan Integral', price: 4000, image: 'https://blog.elamasadero.com/wp-content/uploads/pan_integral_espelta_700.jpg', stock: 15 },
    { name: 'Mogolla Chicharrona', price: 3700, image: 'https://pbs.twimg.com/media/B_0rwzLWIAAQn3q?format=jpg&name=small', stock: 22 },
    { name: 'Pan de Chocolate', price: 4200, image: 'https://www.dagusto.com.co/wp-content/uploads/2021/01/Pan-chocolate-300x300.jpg', stock: 18 },
    { name: 'Pan Francés', price: 2000, image: 'https://enrilemoine.com/wp-content/uploads/2024/06/pan-frances-by-enrilemoine-13.webp', stock: 60 },
    { name: 'Pan Campesino', price: 5000, image: 'https://enrilemoine.com/wp-content/uploads/2011/04/8-IMG_0094.webp', stock: 12 },
    { name: 'Pan de Maíz', price: 3300, image: 'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/E664853F-4532-4865-848D-6A9F6946067A/Derivates/6c0d134f-cb69-4c8a-b51e-5793599ae019.jpg', stock: 25 },
    { name: 'Torta de Naranja', price: 6000, image: 'https://cdn0.recetasgratis.net/es/posts/5/8/1/torta_de_naranja_paso_a_paso_24185_600.webp', stock: 10 }
  ]

    await Product.deleteMany({})
    await Product.insertMany(products)
    console.log('✅ Productos insertados correctamente con stock de 5 unidades')
    process.exit(0)
  })
  .catch(err => {
    console.error('❌ Error al insertar productos:', err)
    process.exit(1)
  })
