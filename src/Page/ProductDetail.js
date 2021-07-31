import React from 'react'
import { useParams } from 'react-router'
export const ProductDetail = () => {
    const params=useParams();
    return (
        <div>
            <h2>product details!!!!</h2>
            <h3>{params.ProductId}</h3>
            <h3>{params.ProductName}</h3>
        </div>
    )
}
