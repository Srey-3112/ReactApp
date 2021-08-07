import React from 'react'
import { useParams } from 'react-router'
export const ProductDetail = () => {
    const params=useParams();
    return (
        <div>
        <h4>product detail page...
        </h4>
        <h6>{params.productId}</h6>                  
    </div>
    )
}
