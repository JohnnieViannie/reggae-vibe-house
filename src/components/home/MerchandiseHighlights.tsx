
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const merchItems = [
  {
    id: 1,
    name: 'Rasta Lion Hoodie',
    price: 45.99,
    image: '/placeholder.svg',
    category: 'Apparel',
  },
  {
    id: 2,
    name: 'House of Reggae T-Shirt',
    price: 25.99,
    image: '/placeholder.svg',
    category: 'Apparel',
  },
  {
    id: 3,
    name: 'Roots & Culture Mug',
    price: 12.99,
    image: '/placeholder.svg',
    category: 'Accessories',
  },
];

const MerchandiseHighlights = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Merchandise Highlights</h2>
          <div className="relative mb-10">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-16 h-1 bg-reggae-gold"></div>
          </div>
          <p className="section-subtitle">
            Wear the Movement. Represent the Culture.
          </p>
        </div>
        
        {/* Merchandise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchItems.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
        
        {/* Shop All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/marketplace" 
            className="bg-reggae-red text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-200 inline-flex items-center"
          >
            <ShoppingCart size={20} className="mr-2" />
            Shop All Merchandise
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
          <span className="inline-block bg-reggae-gold text-reggae-black text-xs font-bold px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="bg-reggae-light p-4 rounded-b-lg">
        <h3 className="font-heading text-xl mb-2">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-reggae-green font-bold">${product.price}</span>
          <button className="bg-reggae-black text-white px-3 py-1 rounded hover:bg-opacity-80 transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MerchandiseHighlights;
