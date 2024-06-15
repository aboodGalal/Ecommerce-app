'use client'
import Breadcrumb from '@/app/_components/Breadcrumb'
import ProductList from '@/app/_components/ProductList'
import ProdcutsApies from '@/app/_utils/ProdcutsApies'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function ProductDetails({ params }) {
  const id = params?.productID
  const [productData, setProductData] = useState()
  const [productList, setProductList] = useState([])
  const path = usePathname().split("/")

  useEffect(() => {
    getProductId_()
    console.log(path)
  }, [])

  const getProductId_ = () => {
    ProdcutsApies.getProductId(id).then(res => {
      console.log(res.data.data)
      setProductData(res.data.data)
      getProductsByCategory_(res.data.data)
    })
  }


  const getProductsByCategory_ = (product) => {
    ProdcutsApies.getProuductsByCtegory(product?.attributes?.category).then(res => {
      console.log(res.data.data)
      setProductList(res.data.data)
    })
  }
  return (
    <div className={`flex flex-col gap-3 px-10 md:px-20 w-full`}>
      <Breadcrumb path={path}/>
      <div className=' inline-flex flex-col md:flex-row gap-5 md:gap-20'>
        <img className={`min-h-[200px] max-h-[250px] max-w-[450px] object-cover rounded-lg`}
          src={productData?.attributes?.image?.data?.attributes?.url} alt="image-card" property='image-card' />
        <div className={`flex flex-col justify-between`}>
          <h2>{productData?.attributes?.title}</h2>
          <p className={`text-gray-600 text-[13px]`}>{productData?.attributes?.category}</p>
          <p className={`text-[13px]`}>{productData?.attributes?.description[0]?.children[0]?.text}</p>
          {productData?.attributes?.instantDelivary && <h2 className={`text-gray-500 text-[12px]`}>Eligible for Instant Delivery</h2>}
          <h2 className={`text-[25px] text-primary`}>${productData?.attributes?.price}</h2>
          <button className={`w-fit bg-primary p-2 text-white rounded-md font-thin text-[14px]`}>Add to cart</button>
        </div>
      </div>
      <ProductList productList={productList} sameProductId={Number(id)}/>
    </div>
  )
}

export default ProductDetails