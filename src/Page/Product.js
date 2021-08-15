import React from 'react'
import { Link } from 'react-router-dom'

export const Product = () => {
    return (
        <div>
        product page
        <ul>
            <li><Link to ="/product/p1">IPHONE</Link></li>
            <li><Link to ="/product/p2">Samsung</Link></li>
            <li><Link to ="/product/p3">One +</Link></li>
        </ul>
    </div>
    )
}
