import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const result = await response.json();
            Array.isArray(result) ? setData(result) : setData([result])
        }
        fetchData()
    }, [url]);
    return { data }
}