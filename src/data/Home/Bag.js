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

    let bags = [
        { ISBN: '9789385824333',
      title: 'You Only Live Once (Paperback)',
      image: bag1,
      price: 150,
      rating: 5 },
     { ISBN: '9788172234980',
      title: 'The Alchemist (Paperback)',
      image: bag2,
      price: 175,
      rating: 3 },
     {ISBN: '9789382665540',
      title: 'You are the Best Wife: A True Love Story',
      image: bag3,
      price: 102,
      rating: 5 },
     {ISBN: '9788179925911',
      title: 'Theory of Everything (Paperback)',
      image: bag4,
      price: 149,
      rating: 3 },
     {ISBN: '9780062641540',
      title: 'The Subtle Art of Not Giving a F*ck ',
      image: bag5,
      price: 290,
      rating: 3 },
     {ISBN: '9788171673407',
      title: 'The Blue Umbrella (Paperback)',
      image: bag6,
      price: 70,
      rating: 5 },
      {ISBN: '9788184006711',
       title: 'You\'re Trending in My Dreams (Paperback)',
       image: bag7,
       price: 175,
       rating: 5 },
       { ISBN: '9788172234980',
        title: 'The Alchemist (Paperback)',
        image: bag8,
        price: 175,
        rating: 3 },
       {ISBN: '9789382665540',
        title: 'You are the Best Wife: A True Love Story',
        image: bag9,
        price: 102,
        rating: 5 },
       {ISBN: '9788179925911',
        title: 'Theory of Everything (Paperback)',
        image: bag10,
        price: 149,
        rating: 3 },
       {ISBN: '9780062641540',
        title: 'The Subtle Art of Not Giving a F*ck ',
        image: bag11,
        price: 290,
        rating: 3 },
       {ISBN: '9788171673407',
        title: 'The Blue Umbrella (Paperback)',
        image: bag12,
        price: 70,
        rating: 5 },
        {ISBN: '9788184006711',
         title: 'You\'re Trending in My Dreams (Paperback)',
         image: bag13,
         price: 175,
         rating: 5 },
         {ISBN: '9788171673407',
          title: 'The Blue Umbrella (Paperback)',
          image: bag14,
          price: 70,
          rating: 5 },
          {ISBN: '9788184006711',
           title: 'You\'re Trending in My Dreams (Paperback)',
           image: bag15,
           price: 175,
           rating: 5 }
    ]
    console.log(bags);
    return (
        <div className="product">
            <div className="bagheading">
                <h1 style={{backgroundImage: `url(${TodaysBackgroungImage})`}}>Bags</h1>
            </div>
            
            <div className="noSearchBar">
                            {bags.map((bg,index) =>{
                        return(
                            <div key={index} className="beforefilterData" >
                                <div className="afterfilterData">
                                {
                                    <ProductSource
                                    image={bg.image}
                                    ISBN={bg.ISBN}
                                    title={bg.title}
                                    price={bg.price}
                                    rating={bg.rating}
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

export default Bag;
