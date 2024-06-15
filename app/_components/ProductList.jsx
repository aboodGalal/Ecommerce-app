import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ productList, sameProductId }) {
  console.log(sameProductId);

  const filteredList = productList.filter(item => item.id !== sameProductId);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-3 md:px-6">
      {filteredList.map(item => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ProductList;