import React from 'react';
import './Product.css'

const Product = ({ handleAddToCart, product }) => {
    // const { handleAddToCart, product } = props
    const { name, img, seller, price, ratings } = product
    return (
        < div className='product' >
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rating: {ratings} starts</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Card</p>
            </button>
        </div >
    );
};

export default Product;