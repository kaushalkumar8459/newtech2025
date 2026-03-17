import { useRef, useState } from 'react'
import './../ProductList.css'
import { useFetch } from './useFetch'

export const ProductListUseFetch = () => {
    const [url, setUrl] = useState('http://localhost:3000/products');
    const inpValue = useRef(null)
    const { data: ProductLists, loading } = useFetch(url);

    function SearchById() {
        setUrl(`${urlValue}/${inpValue.current.value}`)
    }

    function allProduct() {
        setUrl(urlValue)
    }

    function productInStock() {
        setUrl(`${urlValue}?in_stock=true`)
    }


    return (<>
        <button onClick={allProduct}>All Product</button> &nbsp;&nbsp;&nbsp;
        <button onClick={productInStock}>Product In Stock</button>
        <br />
        <br />
        <div>
            <button onClick={SearchById}>Search By Id</button> &nbsp;&nbsp;&nbsp;
            <input type="text" ref={inpValue} />
        </div>
        <br />

        <div>
            {loading && <p>Product loading....</p>}

        </div>

        {!loading &&
            <table>
                <thead style={{ color: "red" }}>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Stock</th>
                    </tr>
                </thead>

                <tbody>
                    {ProductLists && ProductLists?.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.stock}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>}
    </>
    )
}