import React, { useEffect, useState } from 'react'

export const ProductList = () => {
    const [ProductList, setProductList] = useState();

    console.log("data",ProductList);
    
    useEffect(() => {
        fetch('http://localhost:8080/products')
            .then((res) => res.json())
            .then((data) => setProductList(data)
            )
    }, [])


    return (
        <h1>Product List</h1>
    )
}
