import { useState } from "react"
import { useEffect } from "react"

const useProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    //return necessery thing
    return [products];
}

export default useProduct;