
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShoppingCart, Search, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const products = [
  {
    id: 1,
    name: 'Rasta Lion Hoodie',
    price: 45.99,
    image: '/reggae-product1.jpg',
    category: 'Apparel',
    description: 'Premium quality hoodie featuring our signature rasta lion design.',
    inStock: true,
  },
  {
    id: 2,
    name: 'House of Reggae T-Shirt',
    price: 25.99,
    image: '/reggae-product2.jpg',
    category: 'Apparel',
    description: 'Classic fit t-shirt with the House of Reggae logo.',
    inStock: true,
  },
  {
    id: 3,
    name: 'Roots & Culture Mug',
    price: 12.99,
    image: '/reggae-product3.jpg',
    category: 'Accessories',
    description: 'Ceramic mug featuring reggae symbols and colors.',
    inStock: true,
  },
  {
    id: 4,
    name: 'Rasta Beanie',
    price: 18.99,
    image: '/reggae-product4.jpg',
    category: 'Accessories',
    description: 'Comfortable beanie in traditional Rastafarian colors.',
    inStock: true,
  },
  {
    id: 5,
    name: 'Reggae Vinyl Records Set',
    price: 89.99,
    image: '/reggae-product5.jpg',
    category: 'Music',
    description: 'Collection of classic reggae vinyl records.',
    inStock: false,
  },
  {
    id: 6,
    name: 'Bob Marley Canvas Print',
    price: 34.99,
    image: '/reggae-product6.jpg',
    category: 'Art',
    description: 'High-quality canvas print of the reggae legend.',
    inStock: true,
  },
  {
    id: 7,
    name: 'Reggae Sound System Poster',
    price: 15.99,
    image: '/reggae-product7.jpg',
    category: 'Art',
    description: 'Vintage-style poster depicting classic reggae sound systems.',
    inStock: true,
  },
  {
    id: 8,
    name: 'Uganda Reggae Festival Tickets',
    price: 50.00,
    image: '/reggae-product8.jpg',
    category: 'Events',
    description: 'General admission tickets to our annual reggae festival.',
    inStock: true,
  },
];

const categories = ['All', 'Apparel', 'Accessories', 'Music', 'Art', 'Events'];

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const { toast } = useToast();

  const filteredProducts = products
    .filter(product => activeCategory === 'All' || product.category === activeCategory)
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const addToCart = (product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="section-title text-center">Marketplace</h1>
          <div className="relative mb-6 flex justify-center">
            <div className="h-1 w-16 bg-reggae-gold"></div>
          </div>
          <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
            Show your support for the reggae movement with our exclusive merchandise and art pieces.
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-reggae-gold"
              />
              <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-500" />
              <span className="text-gray-500">Filter:</span>
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    activeCategory === category 
                      ? 'bg-reggae-gold text-reggae-black font-bold' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product}
                onAddToCart={() => addToCart(product)}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-heading">No products found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
            </div>
          )}
          
          {/* Shopping Cart Summary */}
          {cart.length > 0 && (
            <div className="mt-12 bg-reggae-light p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-heading mb-4">Your Cart</h2>
              <div className="space-y-2 mb-4">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <span>{item.name} × {item.quantity}</span>
                    <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t border-gray-300 pt-2 mt-2 flex justify-between items-center">
                  <span className="font-heading">Total:</span>
                  <span className="font-bold text-xl">${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-end">
                <button 
                  className="bg-reggae-green text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-200"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-md font-bold">
              Out of Stock
            </span>
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
          <span className="inline-block bg-reggae-gold text-reggae-black text-xs font-bold px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-heading text-xl mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-reggae-green font-bold">${product.price}</span>
          <button 
            className={`flex items-center px-3 py-1 rounded transition duration-200 ${
              product.inStock 
                ? 'bg-reggae-black text-white hover:bg-opacity-80' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            onClick={product.inStock ? onAddToCart : undefined}
            disabled={!product.inStock}
          >
            <ShoppingCart size={16} className="mr-1" />
            {product.inStock ? 'Add to Cart' : 'Sold Out'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
