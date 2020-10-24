import React from 'react'
import '../../css/Order.css';
import moment from "moment";
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
    return (
        <div className="order">
            <h3>Order Id#</h3>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order_id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    ISBN={item.ISBN}
                    title={item.title}  
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText = {(value) => (
                    <h3 className="order_total"><b>Order Total: {value}</b></h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={" ₹ "}
            />            
        </div>
    )
}

export default Order;
