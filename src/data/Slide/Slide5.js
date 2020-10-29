import React from 'react';
import ProductSource from '../Home/ProductSource';
import TodaysBackgroungImage from '../../img/TodaysDealBackground.png';
import nb1 from '../../img/Notebooks/notebook1.png';

function Slide5() {
    return (
        <div className="product">
            <div className="notebookheading">
                <h1 style={{backgroundImage: `url(${TodaysBackgroungImage})`}} >Slider5</h1>
            </div>
            <div className="slide1content">
                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={nb1}
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

export default Slide5;
