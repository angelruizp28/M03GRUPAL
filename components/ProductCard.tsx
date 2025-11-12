
import React from 'react';
import type { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden group">
      <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover group-hover:opacity-80 transition-opacity" />
      <div className="p-3">
        <h3 className="text-sm font-semibold truncate h-10">{product.name}</h3>
        <div className="flex items-baseline gap-2 mt-2">
            <p className="text-md font-bold text-purple-400">${product.price.toFixed(2)}</p>
            {product.originalPrice && <p className="text-xs text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>}
        </div>
        {product.shipping && <p className="text-xs text-green-400 mt-1 font-semibold">{product.shipping}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
