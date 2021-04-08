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

    let penpencil = [
        { ISBN: '9789385824333',
      title: 'You Only Live Once (Paperback)',
      image: penpencil1,
      price: 150,
      rating: 5 },
     { ISBN: '9788172234980',
      title: 'The Alchemist (Paperback)',
      image: penpencil2,
      price: 175,
      rating: 3 },
     {ISBN: '9789382665540',
      title: 'You are the Best Wife: A True Love Story',
      image: penpencil3,
      price: 102,
      rating: 5 },
     {ISBN: '9788179925911',
      title: 'Theory of Everything (Paperback)',
      image: penpencil4,
      price: 149,
      rating: 3 },
     {ISBN: '9780062641540',
      title: 'The Subtle Art of Not Giving a F*ck ',
      image: penpencil5,
      price: 290,
      rating: 3 },
     {ISBN: '9788171673407',
      title: 'The Blue Umbrella (Paperback)',
      image: penpencil6,
      price: 70,
      rating: 5 },
      {ISBN: '9788184006711',
       title: 'You\'re Trending in My Dreams (Paperback)',
       image: penpencil7,
       price: 175,
       rating: 5 },
       {ISBN: '9789382665540',
        title: 'You are the Best Wife: A True Love Story',
        image: penpencil8,
        price: 102,
        rating: 5 },
       {ISBN: '9788179925911',
        title: 'Theory of Everything (Paperback)',
        image: penpencil9,
        price: 149,
        rating: 3 },
       {ISBN: '9780062641540',
        title: 'The Subtle Art of Not Giving a F*ck ',
        image: penpencil10,
        price: 290,
        rating: 3 },
       {ISBN: '9788171673407',
        title: 'The Blue Umbrella (Paperback)',
        image: penpencil11,
        price: 70,
        rating: 5 },
        {ISBN: '9788184006711',
         title: 'You\'re Trending in My Dreams (Paperback)',
         image: penpencil12,
         price: 175,
         rating: 5 },
         {ISBN: '9780062641540',
          title: 'The Subtle Art of Not Giving a F*ck ',
          image: penpencil13,
          price: 290,
          rating: 3 },
         {ISBN: '9788171673407',
          title: 'The Blue Umbrella (Paperback)',
          image: penpencil14,
          price: 70,
          rating: 5 },
          {ISBN: '9788184006711',
           title: 'You\'re Trending in My Dreams (Paperback)',
           image: penpencil15,
           price: 175,
           rating: 5 }
    ]
    console.log(penpencil);
    return (
        <div className="product">
            <div className="penpencilheading">
                <h1 style={{backgroundImage: `url(${TodaysBackgroungImage})`}}>Pen Pencils </h1>
            </div>
            
            <div className="noSearchBar">
                            {penpencil.map((penpncl,index) =>{
                        return(
                            <div key={index} className="beforefilterData" >
                                <div className="afterfilterData">
                                {
                                    <ProductSource
                                    image={penpncl.image}
                                    ISBN={penpncl.ISBN}
                                    title={penpncl.title}
                                    price={penpncl.price}
                                    rating={penpncl.rating}
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

export default PenPencil;
