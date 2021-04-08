import React,{useState,useEffect} from 'react';
import '../../css/Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import {Link, useHistory} from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import axios from "./axios";
import { db } from '../../firebase';
import QR  from '../../img/QR_Code.jpg';


function Payment() {
    const [{basket,user},dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded,setSucceeded] = useState(false);
    const [processing,setProcessing] = useState("");
    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);
    const [clientSecret,setClientSecret] = useState(true);

    useEffect(() => {
        //generate the special stripe secret which allow us to charge the customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currecies sub units
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`
            })  //axios is use to make the request that is GET or POST

            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();

    }, [basket])

    console.log("The SECRET IS >>>",clientSecret)

    const handleSubmit = async (event) =>{
        //fancy stripe stuff
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //Payment intent because payment confirmation

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket:basket,
                    amount:paymentIntent.amount,
                    created:paymentIntent.created
                })

            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type:'EMPTY_BASKET'
            })

            history.replace('/orders')
            alert("Order Placed Succesfully")
        })
    }

    const handleChange = event =>{
        //listen the changes inside the CardElements
        //and display any errors as the customer types their card details 
        setDisabled(event.empty);
        setError(event.error ? event.error.message : ""); //if else statement
    }

    const saveChange = (e) =>{
        alert("Address Saved Succesfully");
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h3 >
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h3>

                {/*Payment Session Delivery address */}
                <div className="payment_session">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <table>
                            <h4>Please Update the Delivery Address</h4>
                            <td><p>{user?.email}</p></td>
                            <td>
                                    <label htmlFor="usname">Name</label>
                                    <input type="text" placeholder="Name"  name="usname"  required/>
                            </td>
                            <td>
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" placeholder="10-digit Mobile number"  name="phone"  />
                            </td>
                            <td>
                                    <label htmlFor="pincode">Pin Code</label>
                                    <input type="text" placeholder="6-digit Pin Code"  name="pincode"  />
                            </td>
                            <td>
                                    <label htmlFor="flat_no">Address</label>
                                    <input type="text"   name="address"  />
                            </td>
                            <td>    
                                    <label>State</label>
                                    <select>
                                        <option>Andaman and Nicobar Islands</option>
                                        <option>Andhra Pradesh</option>
                                        <option>Arunachal Pradesh</option>
                                        <option>Assam</option>
                                        <option>Bihar</option>
                                        <option>Chandigarh</option>
                                        <option>Chhattisgarh</option>
                                        <option>Dadra and Nagar Haveli</option>
                                        <option>Daman and Diu</option>
                                        <option>Delhi</option>
                                        <option>Goa</option>
                                        <option>Gujarat</option>
                                        <option>Haryana</option>
                                        <option>Himachal Pradesh</option>
                                        <option>Jharkhand</option>
                                        <option>Karnataka</option>
                                        <option>Kerala</option>
                                        <option>Lakshadweep</option>
                                        <option>Madhya Pradesh</option>
                                        <option>Maharashtra</option>
                                        <option>Manipur</option>
                                        <option>Meghalaya</option>
                                        <option>Mizoram</option>
                                        <option>Nagaland</option>
                                        <option>Odisha</option>
                                        <option>Puducherry</option>
                                        <option>Punjab</option>
                                        <option>Rajasthan</option>
                                        <option>Tamil Nadu</option>
                                        <option>Tripura</option>
                                        <option>Uttar Pradesh</option>
                                        <option>Uttarakhand</option>
                                        <option>West Bengal</option>
                                    </select>
                            </td>
                        </table>
                        <br></br>
                        <div onClick={saveChange}>
                            <button>Save Changes</button>
                        </div>
                        
                    </div>
                </div>
                {/*Payment Session Review Items */}
                <div className="payment_session">
                    <div className="payment_title">
                        <h3>Review Item and delivery</h3>
                    </div>
                    <div className="payment_item">
                        {basket.map(item =>(
                            <CheckoutProduct
                                ISBN={item.ISBN}
                                title={item.title}  
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/*Payment Session Delivery Address*/}
                <div className="payment_session">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                        <div className="payment_details">
                                {/**React Stripe */}
                                <div className="dreditDebitText">
                                    Credit / Debit Card
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="cardInput">
                                            <CardElement onChange={handleChange}/>
                                    </div>
                                    <div className="payment_pricecontainer">
                                            <CurrencyFormat
                                                renderText = {(value) => (
                                                    <h3>Order Total: {value}</h3>
                                                )}
                                                decimalScale={2}
                                                value={getBasketTotal(basket)}
                                                displayType={"text"}
                                                thousandSeparator={true}
                                                prefix={" ₹ "}
                                            />
                                            <button disabled={processing || disabled || succeeded}>
                                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                            </button>
                                    </div>
                                    {/*Error */}
                                    {error && <div>{error}</div>}
                                </form>
                        </div> 
                        <div className="paytm">
                            <div className="paytm_text">
                                (Scan and Pay with Paytm )
                            </div><br></br>
                            <div className="qrcode">
                                <img src={QR} alt="QR_Code" height="120"/>
                            </div>
                        </div>      
                </div>
            </div>
        </div>
    )
}

export default Payment;
