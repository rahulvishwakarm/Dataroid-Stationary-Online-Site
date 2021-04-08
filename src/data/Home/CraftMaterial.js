import React from 'react';
import '../../css/CraftMaterial.css';
import ProductSource from '../Home/ProductSource';
import craft1 from '../../img/Craft Material/craft1.jpg';
import craft2 from '../../img/Craft Material/craft2.jpg';
import craft3 from '../../img/Craft Material/craft3.jpg';
import craft4 from '../../img/Craft Material/craft4.jpg';
import craft5 from '../../img/Craft Material/craft5.jpg';
import craft6 from '../../img/Craft Material/craft6.jpg';
import craft7 from '../../img/Craft Material/craft7.jpg';
import craft8 from '../../img/Craft Material/craft8.jpg';
import craft9 from '../../img/Craft Material/craft9.jpg';
import craft10 from '../../img/Craft Material/craft10.jpg';
import craft11 from '../../img/Craft Material/craft11.jpg';
import craft12 from '../../img/Craft Material/craft12.jpg';
import craft13 from '../../img/Craft Material/craft13.jpg';
import craft14 from '../../img/Craft Material/craft14.jpg';
import craft15 from '../../img/Craft Material/craft15.jpg';
import TodaysBackgroungImage from '../../img/TodaysDealBackground.png';

function CraftMaterial() {

    let craftman = [
        { ISBN: '9789385824333',
      title: 'You Only Live Once (Paperback)',
      image: craft1,
      price: 150,
      rating: 5 },
     { ISBN: '9788172234980',
      title: 'The Alchemist (Paperback)',
      image: craft2,
      price: 175,
      rating: 3 },
     {ISBN: '9789382665540',
      title: 'You are the Best Wife: A True Love Story',
      image: craft3,
      price: 102,
      rating: 5 },
     {ISBN: '9788179925911',
      title: 'Theory of Everything (Paperback)',
      image: craft4,
      price: 149,
      rating: 3 },
     {ISBN: '9780062641540',
      title: 'The Subtle Art of Not Giving a F*ck ',
      image: craft5,
      price: 290,
      rating: 3 },
     {ISBN: '9788171673407',
      title: 'The Blue Umbrella (Paperback)',
      image: craft6,
      price: 70,
      rating: 5 },
      {ISBN: '9788184006711',
       title: 'You\'re Trending in My Dreams (Paperback)',
       image: craft7,
       price: 175,
       rating: 5 },
       {ISBN: '9780062641540',
        title: 'The Subtle Art of Not Giving a F*ck ',
        image: craft8,
        price: 290,
        rating: 3 },
       {ISBN: '9788171673407',
        title: 'The Blue Umbrella (Paperback)',
        image: craft9,
        price: 70,
        rating: 5 },
        {ISBN: '9788184006711',
         title: 'You\'re Trending in My Dreams (Paperback)',
         image: craft10,
         price: 175,
         rating: 5 },
         {ISBN: '9780062641540',
          title: 'The Subtle Art of Not Giving a F*ck ',
          image: craft11,
          price: 290,
          rating: 3 },
         {ISBN: '9788171673407',
          title: 'The Blue Umbrella (Paperback)',
          image: craft12,
          price: 70,
          rating: 5 },
          {ISBN: '9788184006711',
           title: 'You\'re Trending in My Dreams (Paperback)',
           image: craft13,
           price: 175,
           rating: 5 },
           {ISBN: '9780062641540',
            title: 'The Subtle Art of Not Giving a F*ck ',
            image: craft14,
            price: 290,
            rating: 3 },
           {ISBN: '9788171673407',
            title: 'The Blue Umbrella (Paperback)',
            image: craft15,
            price: 70,
            rating: 5 }
    ]
    console.log(craftman);

    return (
        <div className="product">
            <div className="craftheading">
                <h1 style={{backgroundImage: `url(${TodaysBackgroungImage})`}}>Crafts</h1>
            </div>
            
            <div className="noSearchBar">
                            {craftman.map((craft,index) =>{
                        return(
                            <div key={index} className="beforefilterData" >
                                <div className="afterfilterData">
                                {
                                    <ProductSource
                                    image={craft.image}
                                    ISBN={craft.ISBN}
                                    title={craft.title}
                                    price={craft.price}
                                    rating={craft.rating}
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

export default CraftMaterial;
