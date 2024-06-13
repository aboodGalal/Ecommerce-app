import ProdcutsApies from '@/app/_utils/ProdcutsApies'
import React, { useEffect } from 'react'

function ProductDetails({prams}) {
    useEffect(() =>{
        // getProductId_()
    },[])
    const getProductId_ = () =>{
        ProdcutsApies.getProductId().then(res =>{
            console.log(res.data.data)
        })
    }
  return (
    <div>{prams?.productId}</div>
  )
}

export default ProductDetails