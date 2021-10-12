import React from 'react';
import useProduct from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItem/ReviewItems';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router'

const OrderReview = () => {
    const [products] = useProduct();
    const [cart, setCart] = useCart(products);
    const history = useHistory()
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart)
        removeFromDb(key)
    }

    const handlePlaceOrder = () => {
        history.push('/shipping');
        // setCart([]);
        // clearTheCart();
    }

    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(product => <ReviewItems product={product} handleRemove={handleRemove}></ReviewItems>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <button onClick={handlePlaceOrder} className='btn-regular'> Proceed to Shipping </button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;