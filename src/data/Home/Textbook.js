import React from 'react';
import '../../css/Textbook.css';
import ProductSource from '../Home/ProductSource';
import tb1 from '../../img/Textbook/tb1.jpg';
import tb2 from '../../img/Textbook/tb2.jpg';
import tb3 from '../../img/Textbook/tb3.jpg';
import tb4 from '../../img/Textbook/tb4.jpg';
import tb5 from '../../img/Textbook/tb5.jpg';
import tb6 from '../../img/Textbook/tb6.jpg';
import tb7 from '../../img/Textbook/tb7.jpg';
import tb8 from '../../img/Textbook/tb8.jpg';
import tb9 from '../../img/Textbook/tb9.jpg';
import tb10 from '../../img/Textbook/tb10.jpg';
import tb11 from '../../img/Textbook/tb11.jpg';
import tb12 from '../../img/Textbook/tb12.jpg';
import tb13 from '../../img/Textbook/tb13.jpg';
import tb14 from '../../img/Textbook/tb14.jpg';
import tb15 from '../../img/Textbook/tb15.jpg';
import tb16 from '../../img/Textbook/tb16.jpg';
import tb17 from '../../img/Textbook/tb17.jpg';
import tb18 from '../../img/Textbook/tb18.jpg';
import tb19 from '../../img/Textbook/tb19.jpg';
import tb20 from '../../img/Textbook/tb20.jpg';
import tb21 from '../../img/Textbook/tb21.jpg';
import tb22 from '../../img/Textbook/tb22.jpg';
import tb23 from '../../img/Textbook/tb23.jpg';
import tb24 from '../../img/Textbook/tb24.jpg';
import TodaysBackgroungImage from '../../img/TodaysDealBackground.png';

function Textbook() {

    let textbook = [
        { ISBN: '8176561061',
      title: 'LET US C++ PB (Paperback)',
      image: tb1,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++ PBregergergreg (Paperback)',
      image: tb2,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++ PBrferg (Paperback)',
      image: tb3,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++ PBrergerg (Paperback)',
      image: tb4,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++ PBgreggrgrg (Paperback)',
      image: tb5,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++ PtrertretB (Paperback)',
      image: tb6,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++ PBgergreg (Paperback)',
      image: tb7,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++ retertretPB (Paperback)',
      image: tb8,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++ PB (Paperback)',
      image: tb9,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++tertert PB (Paperback)',
      image: tb10,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++ tretePB (Paperback)',
      image: tb11,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++ tertertPB (Paperback)',
      image: tb12,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++ 6u67676767PB (Paperback)',
      image: tb12,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++ u67ugrtgPB (Paperback)',
      image: tb13,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++ PtyrytryB (Paperback)',
      image: tb14,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++ rtytryrtyPB (Paperback)',
      image: tb15,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++ yrtyrtyPB (Paperback)',
      image: tb16,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++eyertyrtyrt PB (Paperback)',
      image: tb17,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++ PgvdfgrgdfgB (Paperback)',
      image: tb18,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++ dfgdsfgdfghPB (Paperback)',
      image: tb19,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++ dfgdfgdfgdfgPB (Paperback)',
      image: tb20,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++dfgheryhery PB (Paperback)',
      image: tb21,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++eryeryrtghdfb PB (Paperback)',
      image: tb22,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++gddgdgghdrg PB (Paperback)',
      image: tb23,
      price: 150,
      rating: 5 },
      { ISBN: '8176561061',
      title: 'LET US C++ rhregherherhPB (Paperback)',
      image: tb24,
      price: 150,
      rating: 5 }
    ]
    console.log(textbook);
    return (
        <div className="product">
            <div className="textheading">
                <h1 style={{backgroundImage: `url(${TodaysBackgroungImage})`}}>Textbooks</h1>
            </div>
            
            <div className="noSearchBar">
                            {textbook.map((testb,index) =>{
                        return(
                            <div key={index} className="beforefilterData" >
                                <div className="afterfilterData">
                                {
                                    <ProductSource
                                        image={testb.image}
                                        ISBN={testb.ISBN}
                                        title={testb.title}
                                        price={testb.price}
                                        rating={testb.rating}
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

export default Textbook;
