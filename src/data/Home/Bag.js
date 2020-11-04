import React from 'react';
import '../../css/Bag.css';
import ProductSource from '../Home/ProductSource';
import bag1 from '../../img/Bag/bag1.jpg';
import bag2 from '../../img/Bag/bag2.jpg';
import bag3 from '../../img/Bag/bag3.jpg';
import bag4 from '../../img/Bag/bag4.jpg';
import bag5 from '../../img/Bag/bag5.jpg';
import bag6 from '../../img/Bag/bag6.jpg';
import bag7 from '../../img/Bag/bag7.jpg';
import bag8 from '../../img/Bag/bag8.jpg';
import bag9 from '../../img/Bag/bag9.jpg';
import bag10 from '../../img/Bag/bag10.jpg';
import bag11 from '../../img/Bag/bag11.jpg';
import bag12 from '../../img/Bag/bag12.jpg';
import bag13 from '../../img/Bag/bag13.jpg';
import bag14 from '../../img/Bag/bag14.jpg';
import bag15 from '../../img/Bag/bag15.jpg';

import TodaysBackgroungImage from '../../img/TodaysDealBackground.png';

function Bag() {
    return (
        <div className="product">
            <div className="bagheading">
                <h1 style={{backgroundImage: `url(${TodaysBackgroungImage})`}}>Bags</h1>
            </div>
            <div className="product_arrange">
                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={bag1}
                        ISBN="8176561061"
                        title="Text Book1 as the Start"
                        price={431}
                        rating={5}
                        />
                    </div>         
                </div>

                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={bag2}
                        ISBN="8176561061"
                        title="LET US C++ PB (Paperback)"
                        price={431}
                        rating={5}
                        />
                    </div>         
                </div>

                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={bag3}
                        ISBN="8176561061"
                        title="LET US C++ PB (Paperback)"
                        price={431}
                        rating={5}
                        />
                    </div>         
                </div>

                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={bag4}
                        ISBN="8176561061"
                        title="LET US C++ PB (Paperback)"
                        price={431}
                        rating={5}
                        />
                    </div>         
                </div>

                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={bag5}
                        ISBN="8176561061"
                        title="LET US C++ PB (Paperback)"
                        price={431}
                        rating={5}
                        />
                    </div>         
                </div>

                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={bag6}
                        ISBN="8176561061"
                        title="Text Book1 as the Start"
                        price={431}
                        rating={5}
                        />
                    </div>         
                </div>

            </div>

            <hr></hr>

            <div className="product_arrange">
                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={bag7}
                        ISBN="8176561061"
                        title="Text Book1 as the Start"
                        price={431}
                        rating={5}
                        />
                    </div>         
                </div>

                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={bag8}
                        ISBN="8176561061"
                        title="LET US C++ PB (Paperback)"
                        price={431}
                        rating={5}
                        />
                    </div>         
                </div>

                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={bag9}
                        ISBN="8176561061"
                        title="LET US C++ PB (Paperback)"
                        price={431}
                        rating={5}
                        />
                    </div>         
                </div>

                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={bag10}
                        ISBN="8176561061"
                        title="LET US C++ PB (Paperback)"
                        price={431}
                        rating={5}
                        />
                    </div>         
                </div>

                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={bag11}
                        ISBN="8176561061"
                        title="LET US C++ PB (Paperback)"
                        price={431}
                        rating={5}
                        />
                    </div>         
                </div>

                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={bag12}
                        ISBN="8176561061"
                        title="Text Book1 as the Start"
                        price={431}
                        rating={5}
                        />
                    </div>         
                </div>

            </div>

            <hr></hr>

            <div className="">
                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={bag13}
                        ISBN="8176561061"
                        title="Text Book1 as the Start"
                        price={431}
                        rating={5}
                        />
                    </div>         
                </div>

                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={bag14}
                        ISBN="8176561061"
                        title="LET US C++ PB (Paperback)"
                        price={431}
                        rating={5}
                        />
                    </div>         
                </div>

                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={bag15}
                        ISBN="8176561061"
                        title="LET US C++ PB (Paperback)"
                        price={431}
                        rating={5}
                        />
                    </div>         
                </div>
            </div>
            
        </div>
    )
}

export default Bag;
