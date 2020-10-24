import React from 'react';
import '../../css/Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket,user},dispatch] = useStateValue();  
    return (
        <div className="checkoutpage">

            <div className="checkout__left">
                <h4 className="checkout_user_view">Hello {!user ? 'Guest':user.email}</h4>
                <h3 className="checkout_title">Shopping Cart</h3>

                {basket.map(item => (
                    <CheckoutProduct
                        ISBN={item.ISBN}
                        title={item.title}  
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>

        </div>
    )
}

export default Checkout;
