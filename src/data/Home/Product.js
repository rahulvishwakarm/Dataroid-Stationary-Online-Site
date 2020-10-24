import React from 'react';
import '../../css/Product.css';
import ProductSource from './ProductSource';
import TodaysBackgroungImage from '../../img/TodaysDealBackground.png';
import img1 from '../../img/Half Image/Halfed/8176561061.jpg';
import img2 from '../../img/Half Image/Halfed/9780006176909.jpg';
import img3 from '../../img/Half Image/Halfed/9780007163540.jpg';
import img4 from '../../img/Half Image/Halfed/9780007166053.jpg';
import img5 from '../../img/Half Image/Halfed/9780007182268.jpg';
import img6 from '../../img/Half Image/Halfed/9780007192144.jpg';
import img7 from '../../img/Half Image/Halfed/9780007247394.jpg';

function Product() {
    return (
        <div className="product">
            <div>
                <div style={{backgroundImage: `url(${TodaysBackgroungImage})`}} className="today-deal-label" >
                    <b><span  >TODAYS <span style={{color: '#e59285'}}> DEAL</span></span></b>
                </div><br />
            </div>

            <div className="product-row">
                <div className="products">
                    <ProductSource
                    image={img1}
                    ISBN="8176561061"
                    title="LET US C++ PB (Paperback)"
                    price={431}
                    rating={5}
                    />
                </div>
                <div className="products">
                    <ProductSource
                        image={img2}
                        ISBN="9780006176909"
                        title="House of Cards (Paperback)"
                        price={974}
                        rating={4}
                    />
                </div>
                <div className="products">
                    <ProductSource
                        image={img3}
                        ISBN="9780007163540"
                        title="The Bride Stripped Bare (Paperback)"
                        price={456}
                        rating={4}
                    />
                </div>
                <div className="products">
                    <ProductSource
                        image={img4}
                        ISBN="9780007166053"
                        title="Eleven Minutes (Paperback)"
                        price={456}
                        rating={4}
                    />
                </div>  
                <div className="products">
                    <ProductSource
                        image={img5}
                        ISBN="9780007182268"
                        title="Train Recognition Guide  (Paperback)"
                        price={834}
                        rating={4}
                    />
                </div>  
                <div className="products">
                    <ProductSource
                        image={img6}
                        ISBN="9780007192144"
                        title="Other Queen (Paperback)"
                        price={846}
                        rating={4}
                    />
                </div>
                <div className="products">
                    <ProductSource
                        image={img7}
                        ISBN="9780007215997"
                        title="Tiger Who Came to Tea (Paperback)"
                        price={750}
                        rating={4}
                    />
                </div>    
            </div>
        </div>
    )
}

export default Product;
