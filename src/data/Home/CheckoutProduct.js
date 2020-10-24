import React from 'react';
import '../../css/CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ISBN,image,title,price,rating,hideButton}) {

    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = () =>{
        //Remove the item from basket  
        dispatch({
            type:"REMOVE_FROM_BASKET",
            ISBN:ISBN,
        }) 
    }
    return (
        <div className="checkoutProduct">

            <img className="checkoutProduct_image" src={image} alt={ISBN} />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <i className="fa fa-star"></i>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct;
