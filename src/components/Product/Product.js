import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rating: {ratings} starts</small></p>
            </div>
            <button className='btn-cart'>
                <p>Add to Card</p>
            </button>
        </div>
    );
};

export default Product;