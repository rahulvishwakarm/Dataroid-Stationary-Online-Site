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
    let trending = [
        { ISBN: '9789385824333',
      title: 'You Only Live Once (Paperback)',
      image: trend1,
      price: 150,
      rating: 5 },
     { ISBN: '9788172234980',
      title: 'The Alchemist (Paperback)',
      image: trend2,
      price: 175,
      rating: 3 },
     {ISBN: '9789382665540',
      title: 'You are the Best Wife: A True Love Story',
      image: trend3,
      price: 102,
      rating: 5 },
     {ISBN: '9788179925911',
      title: 'Theory of Everything (Paperback)',
      image: trend4,
      price: 149,
      rating: 3 },
     {ISBN: '9780062641540',
      title: 'The Subtle Art of Not Giving a F*ck ',
      image: trend5,
      price: 290,
      rating: 3 },
     {ISBN: '9788171673407',
      title: 'The Blue Umbrella (Paperback)',
      image: trend6,
      price: 70,
      rating: 5 },
      {ISBN: '9788184006711',
       title: 'You\'re Trending in My Dreams (Paperback)',
       image: trend7,
       price: 175,
       rating: 5 }
    ]
    return (
        <div className="product">
            <div>
                <div style={{backgroundImage: `url(${TodaysBackgroungImage})`}} className="today-deal-label" >
                    <b><small>TRENDING</small></b>
                </div><br />
            </div>
            
            <div className="noSearchBar">
                            {trending.map((trend,index) =>{
                        return(
                            <div key={index} className="beforefilterData" >
                                <div className="afterfilterData">
                                {
                                    <ProductSource
                                    image={trend.image}
                                    ISBN={trend.ISBN}
                                    title={trend.title}
                                    price={trend.price}
                                    rating={trend.rating}
                                />
                                }
                                </div>
                            </div>
                        ) 
                    }
                    
                    )}
            </div>
        </div>
    )
}

export default Trending;
