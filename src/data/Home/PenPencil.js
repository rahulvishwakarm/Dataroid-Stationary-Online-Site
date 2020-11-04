import React from 'react';
import '../../css/PenPencil.css';
import ProductSource from '../Home/ProductSource';
import penpencil1 from '../../img/Pen Pencils/penpencil1.jpg';
import penpencil2 from '../../img/Pen Pencils/penpencil2.jpg';
import penpencil3 from '../../img/Pen Pencils/penpencil3.jpg';
import penpencil4 from '../../img/Pen Pencils/penpencil4.jpg';
import penpencil5 from '../../img/Pen Pencils/penpencil5.jpg';
import penpencil6 from '../../img/Pen Pencils/penpencil6.jpg';
import penpencil7 from '../../img/Pen Pencils/penpencil7.jpg';
import penpencil8 from '../../img/Pen Pencils/penpencil8.jpg';
import penpencil9 from '../../img/Pen Pencils/penpencil9.jpg';
import penpencil10 from '../../img/Pen Pencils/penpencil10.jpg';
import penpencil11 from '../../img/Pen Pencils/penpencil11.jpg';
import penpencil12 from '../../img/Pen Pencils/penpencil12.jpg';
import penpencil13 from '../../img/Pen Pencils/penpencil13.jpg';
import penpencil14 from '../../img/Pen Pencils/penpencil14.jpg';
import penpencil15 from '../../img/Pen Pencils/penpencil15.jpg';

import TodaysBackgroungImage from '../../img/TodaysDealBackground.png';

function PenPencil() {
    return (
        <div className="product">
            <div className="penpencilheading">
                <h1 style={{backgroundImage: `url(${TodaysBackgroungImage})`}}>Pen Pencils </h1>
            </div>
            <div className="product_arrange">
                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={penpencil1}
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
                        image={penpencil2}
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
                        image={penpencil3}
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
                        image={penpencil4}
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
                        image={penpencil5}
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
                        image={penpencil6}
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
                        image={penpencil7}
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
                        image={penpencil8}
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
                        image={penpencil9}
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
                        image={penpencil10}
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
                        image={penpencil11}
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
                        image={penpencil12}
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
                        image={penpencil13}
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
                        image={penpencil14}
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
                        image={penpencil15}
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

export default PenPencil;
