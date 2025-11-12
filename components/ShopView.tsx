
import React from 'react';
import { mockProducts } from '../constants';
import ProductCard from './ProductCard';

const ShopView: React.FC = () => {
  return (
    <div className="p-2">
       <h2 className="text-xl font-bold p-2">ALLIN Shop</h2>
       <p className="text-gray-400 text-sm px-2 pb-4">Discover amazing products and daily deals.</p>
      <div className="grid grid-cols-2 gap-2">
        {mockProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopView;
