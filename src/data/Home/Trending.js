import React from 'react';
import '../../css/Trending.css';
import ProductSource from './ProductSource';
import TodaysBackgroungImage from '../../img/TodaysDealBackground.png';
import trend1 from '../../img/Trending/trending1.jpg';
import trend2 from '../../img/Trending/trending2.jpg';
import trend3 from '../../img/Trending/trending3.jpg';
import trend4 from '../../img/Trending/trending4.jpg';
import trend5 from '../../img/Trending/trending5.jpg';
import trend6 from '../../img/Trending/trending6.jpg';
import trend7 from '../../img/Trending/trending7.jpg';

function Trending() {
    return (
        <div className="product">
            <div>
                <div style={{backgroundImage: `url(${TodaysBackgroungImage})`}} className="today-deal-label" >
                    <b><span  >TRENDING</span></b>
                </div><br />
            </div>

            <div className="product-row">
                <div className="products">
                    <ProductSource
                    image={trend1}
                    ISBN="9789385824333"
                    title="You Only Live Once: Author Signed Limited Edition (Paperback)"
                    price={150}
                    rating={5}
                    />
                </div>
                <div className="products">
                    <ProductSource
                        image={trend2}
                        ISBN="9788172234980"
                        title="The Alchemist (Paperback)"
                        price={175}
                        rating={4}
                    />
                </div>
                <div className="products">
                    <ProductSource
                        image={trend3}
                        ISBN="9789382665540"
                        title="You are the Best Wife: A True Love Story (Paperback)"
                        price={102}
                        rating={5}
                    />
                </div>
                <div className="products">
                    <ProductSource
                        image={trend4}
                        ISBN="9788179925911"
                        title="Theory of Everything (Paperback)"
                        price={149}
                        rating={4}
                    />
                </div>  
                <div className="products">
                    <ProductSource
                        image={trend5}
                        ISBN="9780062641540"
                        title="The Subtle Art of Not Giving a F*ck (Paperback)"
                        price={290}
                        rating={5}
                    />
                </div>  
                <div className="products">
                    <ProductSource
                        image={trend6}
                        ISBN="9788171673407"
                        title="The Blue Umbrella (Paperback)"
                        price={70}
                        rating={5}
                    />
                </div>
                <div className="products">
                    <ProductSource
                        image={trend7}
                        ISBN="9788184006711"
                        title="You're Trending in My Dreams (Paperback)"
                        price={175}
                        rating={4}
                    />
                </div>    
            </div>
        </div>
    )
}

export default Trending;
