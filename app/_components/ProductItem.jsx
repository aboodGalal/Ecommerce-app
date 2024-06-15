import Link from 'next/link'
import React from 'react'

function ProductItem({item}) {
  return (
    <Link href={`productDetails/${item?.id}`}  className={`flex flex-col rounded-lg hover:border border-teal-500 hover:cursor-pointer gap-3
    shadow-md`}>
        <img className={`h-[150px] object-cover rounded-t-lg`} 
        src={item?.attributes?.image?.data?.attributes?.url} alt="image-card" property='image-card'/>
        <div className={`w-full flex justify-between items-center px-3`}>
            <div className={`flex flex-col gap-1 items-start`}>
                <h3 className={` line-clamp-1`}>{item?.attributes.title}</h3>
                <p className={`text-[14px] text-gray-400`}>{item?.attributes.category}</p>
            </div>
            <h3 className={``}>{item?.attributes.price}</h3>
        </div>
    </Link>
  )
}

export default ProductItem