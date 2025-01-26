import React, { useState, useContext, useEffect } from 'react'
import { ProductContext } from '../context/ProductContext'; // Corrected to use ProductContext
import Title from './Title';
import ProductItem from './ProductItem'; // Ensure you import ProductItem

const RelatedProducts = ({ category }) => {

    const { products } = useContext(ProductContext); // Get products from ProductContext
    const [related, setRelated] = useState([]); // State to hold related products

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            setRelated(productsCopy.slice(0, 4)); // Set the first 4 related products
        }
    }, [category, products]); // Add category as dependency to filter correctly

  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={"RELATED"} text2={"PRODUCTS"} />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item, index) => (
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} />
            ))}
        </div>
    </div>
  )
}

export default RelatedProducts;
