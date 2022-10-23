import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);
    useEffect(() => {
        const storedCart = getStoreCart();
        // console.log(storedCart);
        const savedCart = [];
        for (const id in storedCart) {
            const adderProduct = products.find(product => product.id === id);
            if (adderProduct) {
                const quantity = storedCart[id];
                adderProduct.quantity = quantity;
                savedCart.push(adderProduct);
            }
            // console.log(adderProduct)
        }
        setCart(savedCart);
    }, [products])
    const handleAddToCart = (product) => {
        // console.log(product)
        //cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;