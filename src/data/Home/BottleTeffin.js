import React from 'react';
import '../../css/BottleTeffin.css';
import ProductSource from '../Home/ProductSource';
import bottleteffin1 from '../../img/Bottle Teffins/bottleteffin1.jpg';
import bottleteffin2 from '../../img/Bottle Teffins/bottleteffin2.jpg';
import bottleteffin3 from '../../img/Bottle Teffins/bottleteffin3.jpg';
import bottleteffin4 from '../../img/Bottle Teffins/bottleteffin4.jpg';
import bottleteffin5 from '../../img/Bottle Teffins/bottleteffin5.jpg';
import bottleteffin6 from '../../img/Bottle Teffins/bottleteffin6.jpg';
import bottleteffin7 from '../../img/Bottle Teffins/bottleteffin1.jpg';
import bottleteffin8 from '../../img/Bottle Teffins/bottleteffin7.jpg';
import bottleteffin9 from '../../img/Bottle Teffins/bottleteffin9.jpg';
import bottleteffin10 from '../../img/Bottle Teffins/bottleteffin10.jpg';
import bottleteffin11 from '../../img/Bottle Teffins/bottleteffin11.jpg';
import bottleteffin12 from '../../img/Bottle Teffins/bottleteffin12.jpg';
import bottleteffin13 from '../../img/Bottle Teffins/bottleteffin13.jpg';
import bottleteffin14 from '../../img/Bottle Teffins/bottleteffin14.jpg';
import bottleteffin15 from '../../img/Bottle Teffins/bottleteffin15.jpg';
import bottleteffin16 from '../../img/Bottle Teffins/bottleteffin11.jpg';
import bottleteffin18 from '../../img/Bottle Teffins/bottleteffin12.jpg';

import TodaysBackgroungImage from '../../img/TodaysDealBackground.png';


function BottleTeffin() {

    let bootleteffins = [
        { ISBN: '9789385824333',
        title: 'You Only Live Once (Paperback)',
        image: bottleteffin1,
        price: 150,
        rating: 5 },
       { ISBN: '9788172234980',
        title: 'The Alchemist (Paperback)',
        image: bottleteffin2,
        price: 175,
        rating: 3 },
       {ISBN: '9789382665540',
        title: 'You are the Best Wife: A True Love Story',
        image: bottleteffin3,
        price: 102,
        rating: 5 },
       {ISBN: '9788179925911',
        title: 'Theory of Everything (Paperback)',
        image: bottleteffin4,
        price: 149,
        rating: 3 },
       {ISBN: '9780062641540',
        title: 'The Subtle Art of Not Giving a F*ck ',
        image: bottleteffin5,
        price: 290,
        rating: 3 },
       {ISBN: '9788171673407',
        title: 'The Blue Umbrella (Paperback)',
        image: bottleteffin6,
        price: 70,
        rating: 5 },
        {ISBN: '9788184006711',
         title: 'You\'re Trending in My Dreams (Paperback)',
         image: bottleteffin7,
         price: 175,
         rating: 5 },
         {ISBN: '9789382665540',
          title: 'You are the Best Wife: A True Love Story',
          image: bottleteffin8,
          price: 102,
          rating: 5 },
         {ISBN: '9788179925911',
          title: 'Theory of Everything (Paperback)',
          image: bottleteffin9,
          price: 149,
          rating: 3 },
         {ISBN: '9780062641540',
          title: 'The Subtle Art of Not Giving a F*ck ',
          image: bottleteffin10,
          price: 290,
          rating: 3 },
         {ISBN: '9788171673407',
          title: 'The Blue Umbrella (Paperback)',
          image: bottleteffin11,
          price: 70,
          rating: 5 },
          {ISBN: '9788184006711',
           title: 'You\'re Trending in My Dreams (Paperback)',
           image: bottleteffin12,
           price: 175,
           rating: 5 },
           {ISBN: '9780062641540',
            title: 'The Subtle Art of Not Giving a F*ck ',
            image: bottleteffin13,
            price: 290,
            rating: 3 },
           {ISBN: '9788171673407',
            title: 'The Blue Umbrella (Paperback)',
            image: bottleteffin14,
            price: 70,
            rating: 5 },
            {ISBN: '9788184006711',
             title: 'You\'re Trending in My Dreams (Paperback)',
             image: bottleteffin15,
             price: 175,
             rating: 5 },
             {ISBN: '9788171673407',
              title: 'The Blue Umbrella (Paperback)',
              image: bottleteffin15,
              price: 70,
              rating: 5 },
              {ISBN: '9788184006711',
               title: 'You\'re Trending in My Dreams (Paperback)',
               image: bottleteffin16,
               price: 175,
               rating: 5 },
               {ISBN: '9788184006711',
                title: 'You\'re Trending in My Dreams (Paperback)',
                image: bottleteffin18,
                price: 175,
                rating: 5 }
    ]

    return (
        <div className="product">
            <div className="bottleteffinheading">
                <h1 style={{backgroundImage: `url(${TodaysBackgroungImage})`}}>Bottle Teffins </h1>
            </div>
            
            <div className="noSearchBar">
                            {bootleteffins.map((btltfn,index) =>{
                        return(
                            <div key={index} className="beforefilterData" >
                                <div className="afterfilterData">
                                {
                                    <ProductSource
                                    image={btltfn.image}
                                    ISBN={btltfn.ISBN}
                                    title={btltfn.title}
                                    price={btltfn.price}
                                    rating={btltfn.rating}
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

export default BottleTeffin;
