import React from 'react';
import '../../css/CompetitiveBook.css';
import ProductSource from '../Home/ProductSource';
import tb1 from '../../img/Textbook/tb1.jpg';
import tb2 from '../../img/Textbook/tb2.jpg';
import tb3 from '../../img/Textbook/tb3.jpg';
import tb4 from '../../img/Textbook/tb4.jpg';
import tb5 from '../../img/Textbook/tb5.jpg';
import tb6 from '../../img/Textbook/tb6.jpg';
import TodaysBackgroungImage from '../../img/TodaysDealBackground.png';


function CompetitiveBook() {

    let comprtitive = [
        { ISBN: '9789385824333',
      title: 'You Only Live Once (Paperback)',
      image: tb1,
      price: 150,
      rating: 5 },
     { ISBN: '9788172234980',
      title: 'The Alchemist (Paperback)',
      image: tb2,
      price: 175,
      rating: 3 },
     {ISBN: '9789382665540',
      title: 'You are the Best Wife: A True Love Story',
      image: tb3,
      price: 102,
      rating: 5 },
     {ISBN: '9788179925911',
      title: 'Theory of Everything (Paperback)',
      image: tb4,
      price: 149,
      rating: 3 },
     {ISBN: '9780062641540',
      title: 'The Subtle Art of Not Giving a F*ck ',
      image: tb5,
      price: 290,
      rating: 3 },
     {ISBN: '9788171673407',
      title: 'The Blue Umbrella (Paperback)',
      image: tb6,
      price: 70,
      rating: 5 }
    ]
    console.log(comprtitive);
    return (
        <div className="product">
            <div className="competitivebookheading">
                <h1 style={{backgroundImage: `url(${TodaysBackgroungImage})`}}>Competitive </h1>
            </div>

            <div className="noSearchBar">
                            {comprtitive.map((comp,index) =>{
                        return(
                            <div key={index} className="beforefilterData" >
                                <div className="afterfilterData">
                                {
                                    <ProductSource
                                    image={comp.image}
                                    ISBN={comp.ISBN}
                                    title={comp.title}
                                    price={comp.price}
                                    rating={comp.rating}
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

export default CompetitiveBook;
