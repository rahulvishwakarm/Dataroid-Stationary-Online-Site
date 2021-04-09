import React from 'react';
import '../../css/Product.css';
import ProductSource from './ProductSource';
import TodaysBackgroungImage from '../../img/TodaysDealBackground.png';
import img1 from '../../img/Half Image/Halfed/8176561061.jpg';
import img2 from '../../img/Half Image/Halfed/9780006176909.jpg';
import img3 from '../../img/Half Image/Halfed/9780007163540.jpg';
import img4 from '../../img/Half Image/Halfed/9780007166053.jpg';
import img5 from '../../img/Half Image/Halfed/9780007182268.jpg';
import img6 from '../../img/Half Image/Halfed/9780007192144.jpg';
import img7 from '../../img/Half Image/Halfed/9780007247394.jpg';

function Product() {
    let nba=[
        { ISBN: '8176561061',
      title: 'LET US C++ PB (Paperback)',
      image: img1,
      price: 431,
      rating: 5 },
     { ISBN: '9.78001E+12',
      title: 'House of Cards (Paperback)',
      image: img2,
      price: 974,
      rating: 4 },
     {ISBN: '9.78001E+12',
      title: 'The Bride Stripped Bare (Paperback)',
      image: img3,
      price: 456,
      rating: 4 },
     {ISBN: '9.78001E+12',
      title: 'Eleven Minutes (Paperback)',
      image: img4,
      price: 672,
      rating: 3 },
     {ISBN: '9.78001E+12',
      title: 'Train Recognition Guide(Recognition Guide Paperback)',
      image: img5,
      price: 834,
      rating: 3 },
     {ISBN: '9.78001E+12',
      title: 'Other Queen (Paperback)',
      image: img6,
      price: 896,
      rating: 3 },
     {ISBN: '9.78001E+12',
      title: 'Tiger Who Came to Tea (Paperback)',
      image: img7,
      price: 986,
      rating: 2 }
      ];
      console.log(nba);
    
    return (
        <div className="product">
            <div>
                <div style={{backgroundImage: `url(${TodaysBackgroungImage})`}} className="today-deal-label" >
                    <b><small  >TODAYS <span style={{color: '#e59285'}}> DEAL</span></small></b>
                </div><br />
            </div>

            <div className="noSearchBar">
                            {nba.map((stud1,index) =>{
                        return(
                            <div key={index} className="beforefilterData" >
                                <div className="afterfilterData">
                                {
                                    <ProductSource
                                    image={stud1.image}
                                    ISBN={stud1.ISBN}
                                    title={stud1.title}
                                    price={stud1.price}
                                    rating={stud1.rating}
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

export default Product;
