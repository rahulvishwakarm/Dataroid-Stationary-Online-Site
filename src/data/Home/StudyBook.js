import React from 'react';
import '../../css/StudyBook.css';
import ProductSource from '../Home/ProductSource';
import tb1 from '../../img/Textbook/tb1.jpg';
import tb2 from '../../img/Textbook/tb2.jpg';
import tb3 from '../../img/Textbook/tb3.jpg';
import tb4 from '../../img/Textbook/tb4.jpg';
import tb5 from '../../img/Textbook/tb5.jpg';
import tb6 from '../../img/Textbook/tb6.jpg';
import TodaysBackgroungImage from '../../img/TodaysDealBackground.png';

function StudyBook() {
    return (
        <div className="product">
            <div className="studybookheading">
                <h1 style={{backgroundImage: `url(${TodaysBackgroungImage})`}}>Study Books </h1>
            </div>
            <div className="product_arrange">
                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={tb1}
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
                        image={tb2}
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
                        image={tb3}
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
                        image={tb4}
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
                        image={tb5}
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
                        image={tb6}
                        ISBN="8176561061"
                        title="Text Book1 as the Start"
                        price={431}
                        rating={5}
                        />
                    </div>         
                </div>
            </div>   
        </div>
    )
}

export default StudyBook;
