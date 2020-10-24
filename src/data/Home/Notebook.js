import React from 'react';
import '../../css/Notebook.css';
import ProductSource from '../Home/ProductSource';
import nb1 from '../../img/Notebooks/notebook1.jpg';
import nb2 from '../../img/Notebooks/notebook2.jpg';
import nb3 from '../../img/Notebooks/notebook3.jpg';
import nb4 from '../../img/Notebooks/notebook4.jpg';
import nb5 from '../../img/Notebooks/notebook5.jpg';
import nb21 from '../../img/Notebooks/2notebook1.jpg';
import nb22 from '../../img/Notebooks/2notebook2.jpg';
import nb23 from '../../img/Notebooks/2notebook3.jpg';
import nb24 from '../../img/Notebooks/2notebook4.jpg';
import nb25 from '../../img/Notebooks/2notebook5.jpg';
import TodaysBackgroungImage from '../../img/TodaysDealBackground.png';

function Notebook({ order }) {
    return (
        <div className="product">
            <div className="notebookheading">
                <h1 style={{backgroundImage: `url(${TodaysBackgroungImage})`}} >Notebooks</h1>
            </div>
            <div>
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

                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={nb2}
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
                        image={nb3}
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
                        image={nb4}
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
                        image={nb5}
                        ISBN="8176561061"
                        title="LET US C++ PB (Paperback)"
                        price={431}
                        rating={5}
                        />
                    </div>         
                </div>
            </div>
            <hr></hr>
            <div>
                
                

                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={nb21}
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
                        image={nb22}
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
                        image={nb23}
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
                        image={nb24}
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
                        image={nb25}
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

export default Notebook;
