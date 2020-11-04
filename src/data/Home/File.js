import React from 'react';
import '../../css/File.css';
import ProductSource from '../Home/ProductSource';
import file1 from '../../img/File/file1.jpg';
import file2 from '../../img/File/file2.jpg';
import file3 from '../../img/File/file3.jpg';
import file4 from '../../img/File/file4.jpg';
import file5 from '../../img/File/file5.jpg';
import file6 from '../../img/File/file6.jpg';
import file7 from '../../img/File/file7.jpg';
import file8 from '../../img/File/file8.jpg';
import file9 from '../../img/File/file9.jpg';
import file10 from '../../img/File/file10.jpg';
import file11 from '../../img/File/file11.jpg';
import file12 from '../../img/File/file12.jpg';
import file13 from '../../img/File/file13.jpg';
import file14 from '../../img/File/file14.jpg';
import file15 from '../../img/File/file15.jpg';
import TodaysBackgroungImage from '../../img/TodaysDealBackground.png';


function File() {
    return (
        <div className="product">
            <div className="fileheading">
                <h1 style={{backgroundImage: `url(${TodaysBackgroungImage})`}}>Files </h1>
            </div>
            <div className="product_arrange">
                <div className="product-row">
                    <div className="products">
                        <ProductSource
                        image={file1}
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
                        image={file2}
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
                        image={file3}
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
                        image={file4}
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
                        image={file5}
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
                        image={file6}
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
                        image={file7}
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
                        image={file8}
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
                        image={file9}
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
                        image={file10}
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
                        image={file11}
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

export default File;
