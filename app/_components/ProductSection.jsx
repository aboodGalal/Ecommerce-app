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
    <div className={`flex flex-col justify-center gap-10`}>
        <div className={`w-full flex justify-between items-center`}>
            <h1 className={``}>Our latest products</h1>
            <a className={`text-primary`} href="">view all collections</a>
        </div>
        <ProductList productList={productList}/>
    </div>
  )
}

export default ProductSection