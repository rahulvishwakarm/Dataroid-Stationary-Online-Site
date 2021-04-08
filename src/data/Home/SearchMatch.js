import React from 'react';
import ProductSource from '../Home/ProductSource';
import '../../css/SearchMatch.css';
import craft1 from "../../img/Craft Material/craft1.jpg"
import craft2 from "../../img/Craft Material/craft9.jpg"
import textbook1 from '../../img/Textbook/tb1.jpg';
import textbook2 from '../../img/Textbook/tb2.jpg';
import textbook3 from '../../img/Textbook/tb3.jpg';
import textbook4 from '../../img/Textbook/tb4.jpg';
import textbook5 from '../../img/Textbook/tb5.jpg';
import notebook1 from '../../img/Notebooks/2notebook2.png';
import notebook2 from '../../img/Notebooks/2notebook3.png';
import notebook3 from '../../img/Notebooks/2notebook4.png';
import penpencil1 from '../../img/Pen Pencils/penpencil1.jpg';
import penpencil2 from '../../img/Pen Pencils/penpencil4.jpg';
import penpencil3 from '../../img/Pen Pencils/penpencil6.jpg';
import trend1 from '../../img/Trending/trending1.jpg';
import trend2 from '../../img/Trending/trending2.jpg';
function SearchMatch() {

    let searchmathces = [
        { ISBN: '9789385824333',
      title: 'You Only Live Once (Paperback)',
      image: textbook1,
      price: 150,
      rating: 5 },
     { ISBN: '9788172234980',
      title: 'The Alchemist (Paperback)',
      image: notebook2,
      price: 175,
      rating: 3 },
     {ISBN: '9789382665540',
      title: 'You are the Best Wife: A True Love Story',
      image: trend2,
      price: 102,
      rating: 5 },
     {ISBN: '9788179925911',
      title: 'Theory of Everything (Paperback)',
      image: penpencil2,
      price: 149,
      rating: 3 },
     {ISBN: '9780062641540',
      title: 'The Subtle Art of Not Giving a F*ck ',
      image: textbook5,
      price: 290,
      rating: 3 },
     {ISBN: '9788171673407',
      title: 'The Blue Umbrella (Paperback)',
      image: trend1,
      price: 70,
      rating: 5 },
      {ISBN: '9788184006711',
       title: 'You\'re Trending in My Dreams (Paperback)',
       image: penpencil3,
       price: 175,
       rating: 5 },
       {ISBN: '9780062641540',
        title: 'The Subtle Art of Not Giving a F*ck ',
        image: penpencil1,
        price: 290,
        rating: 3 },
       {ISBN: '9788171673407',
        title: 'The Blue Umbrella (Paperback)',
        image: notebook3,
        price: 70,
        rating: 5 },
        {ISBN: '9788184006711',
         title: 'You\'re Trending in My Dreams (Paperback)',
         image: notebook1,
         price: 175,
         rating: 5 },
         {ISBN: '9780062641540',
          title: 'The Subtle Art of Not Giving a F*ck ',
          image: textbook4,
          price: 290,
          rating: 3 },
         {ISBN: '9788171673407',
          title: 'The Blue Umbrella (Paperback)',
          image: craft2,
          price: 70,
          rating: 5 },
          {ISBN: '9788184006711',
           title: 'You\'re Trending in My Dreams (Paperback)',
           image: textbook3,
           price: 175,
           rating: 5 },
           {ISBN: '9788171673407',
            title: 'The Blue Umbrella (Paperback)',
            image: notebook2,
            price: 70,
            rating: 5 },
            {ISBN: '9788184006711',
             title: 'You\'re Trending in My Dreams (Paperback)',
             image: textbook2,
             price: 175,
             rating: 5 },
             {ISBN: '9788171673407',
              title: 'The Blue Umbrella (Paperback)',
              image: craft1,    
              price: 70,
              rating: 5 },
    ]
    console.log(searchmathces);
    return (
        <div>
            <div>
                <h1 className="title-search">Your Search Matches Ids</h1><br></br>
            </div>

            <div className="noSearchBar">
                            {searchmathces.map((searchmat,index) =>{
                        return(
                            <div key={index} className="beforefilterData" >
                                <div className="afterfilterData">
                                {
                                    <ProductSource
                                    image={searchmat.image}
                                    ISBN={searchmat.ISBN}
                                    title={searchmat.title}
                                    price={searchmat.price}
                                    rating={searchmat.rating}
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

export default SearchMatch;