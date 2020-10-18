import React from 'react';
import '../../css/Product.css';
import ProductSource from './ProductSource';
import img1 from '../../img/Half Image/Halfed/8176561061.jpg';

function Product() {
    return (
        <div className="product">
            <div className="product-row">
                <div className="products">
                    <ProductSource
                    image={img1}
                    ISBN="8293749671095"
                    title="Let Us C++ with Effort and great with it"
                    price={590}
                    rating={4}
                    />
                </div>
                <div className="products">
                    <ProductSource/>
                </div>
                <div className="products">
                    <ProductSource/>
                </div>
                <div className="products">
                    <ProductSource/>
                </div>  
                <div className="products">
                    <ProductSource/>
                </div>  
                <div className="products">
                    <ProductSource/>
                </div>
                <div className="products">
                    <ProductSource/>
                </div>  
                <div className="products">
                    <ProductSource/>
                </div>      
            </div>


            <div className="product-row">

            </div>


            <div className="product-row">

            </div>   


        </div>
    )
}

export default Product;
