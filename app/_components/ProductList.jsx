import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList}) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-3 md:px-6`}>
      {productList.map(item => (
        <ProductItem key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default ProductList