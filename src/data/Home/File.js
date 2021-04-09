import React from 'react';
import '../../css/File.css';
import ProductSource from '../Home/ProductSource';
import file1 from '../../img/File/file1.jpg';
import file2 from '../../img/File/file2.jpg';
import file3 from '../../img/File/file3.jpg';
import file4 from '../../img/File/file4.jpg';
import file5 from '../../img/File/file5.jpg';
import file6 from '../../img/File/file6.jpg';
import file7 from '../../img/File/file7.jpg';
import file8 from '../../img/File/file8.jpg';
import file9 from '../../img/File/file9.jpg';
import file10 from '../../img/File/file10.jpg';
import file11 from '../../img/File/file11.jpg';
import file12 from '../../img/File/file12.jpg';
import file13 from '../../img/File/file13.jpg';
import file14 from '../../img/File/file14.jpg';
import file15 from '../../img/File/file15.jpg';
import TodaysBackgroungImage from '../../img/TodaysDealBackground.png';


function File() {

    let file = [
        { ISBN: '9789385824333',
      title: 'Material Professional File Folders',
      image: file1,
      price: 150,
      rating: 5 },
     { ISBN: '9788172234956',
      title: 'Kim Bag House Faux Leather',
      image: file2,
      price: 175,
      rating: 3 },
     {ISBN: '97893826655384',
      title: 'Callas 3 Layer Polymer Elite Executive',
      image: file3,
      price: 102,
      rating: 5 },
     {ISBN: '9788179925929',
      title: 'TStorite PU Leather Multipurpose',
      image: file4,
      price: 149,
      rating: 3 },
     {ISBN: '9780062641593',
      title: 'DAHSHA Leather Professional File',
      image: file5,
      price: 290,
      rating: 3 },
     {ISBN: '9788171673439',
      title: 'DAHSHA Leather Professional File',
      image: file6,
      price: 70,
      rating: 5 },
      {ISBN: '9788184006701',
       title: 'Multipurpose Document 20 Sleeves File',
       image: file7,
       price: 175,
       rating: 5 },
       {ISBN: '9789382665519',
        title: 'Leitz Style PP Display Book File',
        image: file8,
        price: 102,
        rating: 5 },
       {ISBN: '9788179925952',
        title: 'Comma Abaca - A4 Size - 2D Ring',
        image: file9,
        price: 149,
        rating: 3 },
       {ISBN: '9780062641576',
        title: 'Mahavir Superior - Fullscape Size',
        image: file10,
        price: 290,
        rating: 3 },
       {ISBN: '9788171673410',
        title: 'File Folder Size Presentation File',
        image: file11,
        price: 70,
        rating: 5 },
        {ISBN: '9788184006710',
         title: 'VPS Enterprises Display Book File Folder',
         image: file12,
         price: 175,
         rating: 5 },
         {ISBN: '9780062641540',
          title: 'A4 Paper Report Sliding Bar Cover',
          image: file13,
          price: 290,
          rating: 3 },
         {ISBN: '9788171673407',
          title: 'Comma Abaca - A4 Size Cover',
          image: file14,
          price: 70,
          rating: 5 },
          {ISBN: '9788184006711',
           title: 'TRANBO Plastic File Folder',
           image: file15,
           price: 175,
           rating: 5 }
    ]
    console.log(file);

    return (
        <div className="product">
            <div className="fileheading">
                <h1 style={{backgroundImage: `url(${TodaysBackgroungImage})`}}>Files </h1>
            </div>

            <div className="noSearchBar">
                            {file.map((fl,index) =>{
                        return(
                            <div key={index} className="beforefilterData" >
                                <div className="afterfilterData">
                                {
                                    <ProductSource
                                    image={fl.image}
                                    ISBN={fl.ISBN}
                                    title={fl.title}
                                    price={fl.price}
                                    rating={fl.rating}
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

export default File;
