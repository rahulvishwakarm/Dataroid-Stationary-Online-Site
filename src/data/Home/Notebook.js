import React from 'react';
import '../../css/Notebook.css';
import ProductSource from '../Home/ProductSource';
import nb1 from '../../img/Notebooks/notebook1.png';
import nb2 from '../../img/Notebooks/notebook2.png';
import nb3 from '../../img/Notebooks/notebook3.png';
import nb4 from '../../img/Notebooks/notebook4.png';
import nb5 from '../../img/Notebooks/notebook5.png';
import nb22 from '../../img/Notebooks/2notebook2.png';
import nb23 from '../../img/Notebooks/2notebook3.png';
import nb24 from '../../img/Notebooks/2notebook4.png';
import nb25 from '../../img/Notebooks/2notebook5.png';
import TodaysBackgroungImage from '../../img/TodaysDealBackground.png';

function Notebook({ order }) {

    let notebook = [
        { ISBN: '8176561061',
      title: 'Classmate Notebook Single Line Pack Of 4',
      image: nb1,
      price: 150,
      rating: 5 },
     { ISBN: '9788172234980',
      title: 'Classmate Notebook Single Line Pack Of 4',
      image: nb2,
      price: 175,
      rating: 3 },
     {ISBN: '9789382665540',
      title: 'Classmate Notebook Single Line Pack Of 4',
      image: nb3,
      price: 102,
      rating: 5 },
     {ISBN: '9788179925911',
      title: 'Classmate Notebook Single Line Pack Of 4',
      image: nb4,
      price: 149,
      rating: 3 },
     {ISBN: '9780062641540',
      title: 'Classmate Notebook Single Line Pack Of 4',
      image: nb5,
      price: 290,
      rating: 3 },
     {ISBN: '9788171673407',
      title: 'Classmate Notebook Single Line Pack Of 1',
      image: nb22,
      price: 70,
      rating: 5 },
      {ISBN: '9788184006711',
       title: 'Classmate Notebook Single Line Pack Of 1',
       image: nb23,
       price: 175,
       rating: 5 },
       {ISBN: '9788171673407',
        title: 'Classmate Notebook Single Line Pack Of 1',
        image: nb24,
        price: 70,
        rating: 5 },
        {ISBN: '9788184006711',
         title: 'Classmate Notebook Single Line Pack Of 1',
         image: nb25,
         price: 175,
         rating: 5 },
         {ISBN: '9788171673407',
          title: 'Classmate Notebook Single Line Pack Of 1',
          image: nb22,
          price: 70,
          rating: 5 },
          {ISBN: '9788184006711',
           title: 'Classmate Notebook Single Line Pack Of 1',
           image: nb23,
           price: 175,
           rating: 5 },
           {ISBN: '9788171673407',
            title: 'Classmate Notebook Single Line Pack Of 1',
            image: nb24,
            price: 70,
            rating: 5 },
            {ISBN: '9788184006711',
             title: 'Classmate Notebook Single Line Pack Of 1',
             image: nb25,
             price: 175,
             rating: 5 },
             {ISBN: '9788171673407',
              title: 'Classmate Notebook Single Line Pack Of 1',
              image: nb22,
              price: 70,
              rating: 5 },
              {ISBN: '9788184006711',
               title: 'Classmate Notebook Single Line Pack Of 1',
               image: nb23,
               price: 175,
               rating: 5 },
               {ISBN: '9788171673407',
                title: 'Classmate Notebook Single Line Pack Of 1',
                image: nb24,
                price: 70,
                rating: 5 },
                {ISBN: '9788184006711',
                 title: 'Classmate Notebook Single Line Pack Of 1',
                 image: nb25,
                 price: 175,
                 rating: 5 },
                 {ISBN: '9788171673407',
                  title: 'Classmate Notebook Single Line Pack Of 1',
                  image: nb22,
                  price: 70,
                  rating: 5 },
                  {ISBN: '9788184006711',
                   title: 'Classmate Notebook Single Line Pack Of 1',
                   image: nb23,
                   price: 175,
                   rating: 5 },
                   {ISBN: '9788171673407',
                    title: 'Classmate Notebook Single Line Pack Of 1',
                    image: nb24,
                    price: 70,
                    rating: 5 },
                    {ISBN: '9788184006711',
                     title: 'Classmate Notebook Single Line Pack Of 1',
                     image: nb25,
                     price: 175,
                     rating: 5 }
    ]
    console.log(notebook);

    return (
        <div className="product">
            <div className="notebookheading">
                <h1 style={{backgroundImage: `url(${TodaysBackgroungImage})`}} >Notebooks</h1>
            </div>
            
            <div className="noSearchBar">
                            {notebook.map((note,index) =>{
                        return(
                            <div key={index} className="beforefilterData" >
                                <div className="afterfilterData">
                                {
                                    <ProductSource
                                    image={note.image}
                                    ISBN={note.ISBN}
                                    title={note.title}
                                    price={note.price}
                                    rating={note.rating}
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

export default Notebook;
