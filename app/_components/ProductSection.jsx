'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProdcutsApies from '../_utils/ProdcutsApies'

function ProductSection() {
    const [productList, setProductList] = useState([])
    useEffect(() =>{
        getLatestProducts_()
    },[])
    const getLatestProducts_ = () =>{
        ProdcutsApies.getLatestProducts().then(res =>{
            console.log(res.data.data)
            setProductList(res.data.data)
        })
    }

  return (
    <div>
        <ProductList productList={productList}/>
    </div>
  )
}

export default ProductSection