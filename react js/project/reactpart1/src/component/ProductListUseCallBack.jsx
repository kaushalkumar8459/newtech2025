import { useCallback, useEffect, useRef, useState } from 'react'
import './ProductList.css'
export const ProductListUseCallBack = () => {
    const urlValue = 'http://localhost:3000/products'
    const [ProductLists, setProductLists] = useState();
    const [url, setUrl] = useState(urlValue);
    const inpValue = useRef(null)
    const [counter, setCounter] = useState(0)

    //we passed counter in same array, issue during counter chnage api will also trigger.

    // ways 1:- when function will be inside useeffect, we can follow below approach.
    // useEffect(() => {
    //     async function fetchProducts() {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         Array.isArray(data) ? setProductLists(data) : setProductLists([data])
    //     }
    //     fetchProducts()
    // }, [url])

    // useEffect(() => {
    //     fetchProducts()
    // }, [])

    // ways 2:- when function is outside of useeffect, in that scenario write async function inside useCallBack
    const fetchProducts = useCallback(async () => {
        const response = await fetch(url);
        const data = await response.json();
        Array.isArray(data) ? setProductLists(data) : setProductLists([data])
    }, [url])

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])




    useEffect(() => {
        console.log("counter changed", counter);
    }, [counter])

    function SearchById() {
        setUrl(`${urlValue}/${inpValue.current.value}`)
    }

    function allProduct() {
        setUrl(urlValue)
    }

    function productInStock() {
        setUrl(`${urlValue}?in_stock=true`)
    }

    function handleCounter(params) {
        setCounter(counter + 1)
    }


    return (<>

        <button onClick={handleCounter}>Counter {counter}</button> &nbsp;&nbsp;&nbsp;

        <button onClick={allProduct}>All Product</button> &nbsp;&nbsp;&nbsp;
        <button onClick={productInStock}>Product In Stock</button>
        <br />
        <br />
        <div>
            <button onClick={SearchById}>Search By Id</button> &nbsp;&nbsp;&nbsp;
            <input type="text" ref={inpValue} />
        </div>
        <br />

        <table>
            <thead style={{ color: "red" }}>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Stock</th>
                </tr>
            </thead>

            <tbody>
                {ProductLists?.map((product) => {
                    return (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.stock}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>
    )
}
