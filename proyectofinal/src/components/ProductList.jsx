import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    name: 'Balón Adidas Pro',
    price: 120000,
    image: 'https://via.placeholder.com/300x200?text=Adidas+Pro',
  },
  {
    id: 2,
    name: 'Balón Nike Flight',
    price: 135000,
    image: 'https://via.placeholder.com/300x200?text=Nike+Flight',
  },
  {
    id: 3,
    name: 'Balón Puma LaLiga',
    price: 110000,
    image: 'https://via.placeholder.com/300x200?text=Puma+LaLiga',
  },
  {
    id: 4,
    name: 'Balón Select Brillant',
    price: 125000,
    image: 'https://via.placeholder.com/300x200?text=Select+Brillant',
  },
  {
    id: 5,
    name: 'Balón Mitre Delta',
    price: 95000,
    image: 'https://via.placeholder.com/300x200?text=Mitre+Delta',
  },
  {
    id: 6,
    name: 'Balón Uhlsport Infinity',
    price: 100000,
    image: 'https://via.placeholder.com/300x200?text=Uhlsport+Infinity',
  },
  {
    id: 7,
    name: 'Balón Joma Classic',
    price: 89000,
    image: 'https://via.placeholder.com/300x200?text=Joma+Classic',
  },
  {
    id: 8,
    name: 'Balón Molten Europa',
    price: 112000,
    image: 'https://via.placeholder.com/300x200?text=Molten+Europa',
  },
  {
    id: 9,
    name: 'Balón Kipsta F500',
    price: 77000,
    image: 'https://via.placeholder.com/300x200?text=Kipsta+F500',
  },
  {
    id: 10,
    name: 'Balón Diadora Neo',
    price: 105000,
    image: 'https://via.placeholder.com/300x200?text=Diadora+Neo',
  },
  {
    id: 11,
    name: 'Balón Reusch Mundial',
    price: 99000,
    image: 'https://via.placeholder.com/300x200?text=Reusch+Mundial',
  },
  {
    id: 12,
    name: 'Balón Penalty Max 1000',
    price: 93000,
    image: 'https://via.placeholder.com/300x200?text=Penalty+Max+1000',
  },
  {
    id: 13,
    name: 'Balón New Balance Vision',
    price: 97000,
    image: 'https://via.placeholder.com/300x200?text=NB+Vision',
  },
  {
    id: 14,
    name: 'Balón Topper Samba',
    price: 85000,
    image: 'https://via.placeholder.com/300x200?text=Topper+Samba',
  },
  {
    id: 15,
    name: 'Balón Umbro Neo Swerve',
    price: 103000,
    image: 'https://via.placeholder.com/300x200?text=Umbro+Neo+Swerve',
  },
]

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
