import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList}) {
  return (
    <div >
      {productList.map(item => (
        <ProductItem key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default ProductList