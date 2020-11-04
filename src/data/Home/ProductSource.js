import React from 'react';
import '../../css/ProductSource.css';
import { useStateValue } from './StateProvider';


function ProductSource({image,ISBN,title,price,rating}) {
    const [{basket},dispatch] =useStateValue();


    const addToBasket = () =>{
        //dispatch the item in the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                ISBN:ISBN,
                title:title,
                image:image,
                price:price,
                rating:rating,
            }
        });
        alert(title+" " +"Added to Cart");
    } ;
    return (
        <div className="product_source">
                <div className="todays-deal-poduct1">
                    <table className="producttbl">
                        <tbody>
                                <tr>
                                    <th>
                                        <div style={{textAlign: 'center'}} className="todays-deal-product-image">
                                            <img src={image} alt="p1" height="160px" weight="230px" />
                                        </div>
                                        <div className="todays-deal-product-desc">
                                            <div className="ratingstar">
                                                <li style={{textAlign: 'center'}} >{Array(rating).fill().map((_,i)=>(<i className="fa fa-star"></i>))}</li>
                                            </div>
                                            <li>ISBN:{ISBN}</li>
                                            <li>{title}</li>
                                            <div className="isbn_price">
                                                <li style={{textAlign: 'center',fontWeight:'bold'}}>₹{price}</li>
                                            </div>
                                            <div style={{textAlign: 'center'}}>
                                                <button onClick={addToBasket} style={{backgroundColor: 'red', border: 'none'}} type="submit"><li style={{fontSize: 'small', listStyleType: 'none', textAlign: 'center', color: 'white'}}>Add to Cart</li></button>
                                            </div>
                                        </div>
                                    </th> 
                                </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    )
}

export default ProductSource;
