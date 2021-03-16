import React from 'react';
import ProductSource from '../Home/ProductSource';
import '../../css/SearchMatch.css';
import craft1 from "../../img/Craft Material/craft1.jpg"
import craft2 from "../../img/Craft Material/craft9.jpg"
import textbook1 from '../../img/Textbook/tb1.jpg';
import textbook2 from '../../img/Textbook/tb2.jpg';
import textbook3 from '../../img/Textbook/tb3.jpg';
import textbook4 from '../../img/Textbook/tb4.jpg';
import textbook5 from '../../img/Textbook/tb5.jpg';
import notebook1 from '../../img/Notebooks/2notebook2.png';
import notebook2 from '../../img/Notebooks/2notebook3.png';
import notebook3 from '../../img/Notebooks/2notebook4.png';
import penpencil1 from '../../img/Pen Pencils/penpencil1.jpg';
import penpencil2 from '../../img/Pen Pencils/penpencil4.jpg';
import penpencil3 from '../../img/Pen Pencils/penpencil6.jpg';
import trend1 from '../../img/Trending/trending1.jpg';
import trend2 from '../../img/Trending/trending2.jpg';
function SearchMatch() {
    return (
        <div>
            <div>
                <h1 className="title-search">Your Search Matches Ids</h1><br></br>
            </div>

            <div className="product_arrange">
                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={craft1}
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
                        image={notebook1}
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
                        image={textbook1}
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
                        image={notebook2}
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
                        image={penpencil1}
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
                        image={textbook2}
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
                        image={textbook4}
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
                        image={textbook3}
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
                        image={trend1}
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
                        image={trend2}
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
                        image={notebook3}
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
                        image={textbook5}
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

export default SearchMatch;