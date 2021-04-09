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
        title: 'Oliveware Teso Lunch Box with Bottle',
        image: bottleteffin1,
        price: 1508,
        rating: 5 },
       { ISBN: '9788172234980',
        title: 'Oleander Stainless Steel 3 Container',
        image: bottleteffin2,
        price: 1757,
        rating: 3 },
       {ISBN: '9789382665588',
        title: 'Atman Tiffin/Lunch Box with Bag for Office',
        image: bottleteffin3,
        price: 1062,
        rating: 5 },
       {ISBN: '9788179925900',
        title: 'ADIRSA LB3001 Navy Blue Insulated Lunch Bag',
        image: bottleteffin4,
        price: 1459,
        rating: 3 },
       {ISBN: '9780062641576',
        title: 'Home Puff Contigo-L Lunch Box Stainless',
        image: bottleteffin5,
        price: 2905,
        rating: 3 },
       {ISBN: '9788171673401',
        title: 'Vaya BagMat Office & School Lunch Bag',
        image: bottleteffin6,
        price: 2704,
        rating: 5 },
        {ISBN: '9788184006782',
         title: 'Fabia Series Stainless Steel Air Tight',
         image: bottleteffin7,
         price: 1745,
         rating: 5 },
         {ISBN: '9789382665502',
          title: 'Home Puff Double Wall Vacuum Insulated Stainless',
          image: bottleteffin8,
          price: 1102,
          rating: 5 },
         {ISBN: '9788179925991',
          title: 'Eco Right Insulated Lunch Bag',
          image: bottleteffin9,
          price: 2149,
          rating: 3 },
         {ISBN: '9780062641563',
          title: 'Tupperware Xtreme Set - Bottle and Box',
          image: bottleteffin10,
          price: 2190,
          rating: 3 },
         {ISBN: '9788171673401',
          title: 'TintBox BPA Free Glass Lunch Box',
          image: bottleteffin11,
          price: 1270,
          rating: 5 },
          {ISBN: '9788184006772',
           title: 'Milton Steel Combi Lunch Box',
           image: bottleteffin12,
           price: 1575,
           rating: 5 },
           {ISBN: '9780062641554',
            title: 'Milton Steel Combi Lunch Box with Tumbler',
            image: bottleteffin13,
            price: 2590,
            rating: 3 },
           {ISBN: '9788171673432',
            title: 'Milton Prime Lunch Plastic Tiffin Box Set',
            image: bottleteffin14,
            price: 1250,
            rating: 5 },
            {ISBN: '9788184006765',
             title: 'Treo by Milton Health First Square Glass',
             image: bottleteffin15,
             price: 1875,
             rating: 5 },
             {ISBN: '9788171673495',
              title: 'Cello Lunch Express, Insulated Tiffin',
              image: bottleteffin15,
              price: 1570,
              rating: 5 },
              {ISBN: '9788184006702',
               title: 'Rema - Stainless Steel Lunch Box Set',
               image: bottleteffin16,
               price: 1875,
               rating: 5 },
               {ISBN: '9788184006755',
                title: 'GOPY Stainless Steel 3 Container',
                image: bottleteffin18,
                price: 1975,
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
