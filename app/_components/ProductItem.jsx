import React from 'react'

function ProductItem({item}) {
  return (
    <div>
        {item.attributes.title}
    </div>
  )
}

export default ProductItem