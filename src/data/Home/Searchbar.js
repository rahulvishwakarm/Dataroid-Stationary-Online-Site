import React,{useState} from 'react';
import '../../css/Searchbar.css';
import '../../css/bootstrap.css';
import { Link } from 'react-router-dom';
import trend1 from '../../img/Trending/trending1.jpg';
import trend2 from '../../img/Trending/trending2.jpg';
import trend3 from '../../img/Trending/trending3.jpg';
import trend4 from '../../img/Trending/trending4.jpg';
import trend5 from '../../img/Trending/trending5.jpg';
import trend6 from '../../img/Trending/trending6.jpg';
import trend7 from '../../img/Trending/trending7.jpg';

function Searchbar() {
    const [input,setInput]=useState("");

    let searchproduct=[
        { ISBN: '8176561061',
      title: 'Train Recognition Guide',
      image: trend1,
      price: 431,
      rating: 5 },
     { ISBN: '9.78001E+12',
      title: 'Train Recognition Guide',
      image: trend2,
      price: 974,
      rating: 4 },
     {ISBN: '9.78001E+12',
      title: 'Train Recognition Guide',
      image: trend3,
      price: 456,
      rating: 4 },
     {ISBN: '9.78001E+12',
      title: 'Train Recognition Guide',
      image: trend4,
      price: 456,
      rating: 3 },
     {ISBN: '9.78001E+12',
      title: 'Train Recognition Guide',
      image: trend5,
      price: 834,
      rating: 3 },
     {ISBN: '9.78001E+12',
      title: 'Train Recognition Guide',
      image: trend6,
      price: 456,
      rating: 3 },
     {ISBN: '9.78001E+12',
      title: 'Train Recognition Guidetghrthrthrthrth',
      image: trend7,
      price: 456,
      rating: 2 },
      {ISBN: '9.78001E+12',
      title: 'Train Recognition Guidefgtfhf',
      image: trend1,
      price: 456,
      rating: 2 },
      {ISBN: '9.78001E+12',
      title: 'Train Recognition Guidefgtfhfghtyjhytj',
      image: trend5,
      price: 456,
      rating: 2 },
      { ISBN: '9789385824333',
      title: 'You Only Live Once (Paperback)',
      image: trend1,
      price: 150,
      rating: 5 },
     { ISBN: '9788172234980',
      title: 'The Alchemist (Paperback)',
      image: trend2,
      price: 175,
      rating: 3 },
     {ISBN: '9789382665540',
      title: 'You are the Best Wife: A True Love Story',
      image: trend3,
      price: 102,
      rating: 5 },
     {ISBN: '9788179925911',
      title: 'Theory of Everything (Paperback)',
      image: trend4,
      price: 149,
      rating: 3 },
     {ISBN: '9780062641540',
      title: 'The Subtle Art of Not Giving a F*ck ',
      image: trend5,
      price: 290,
      rating: 3 },
     {ISBN: '9788171673407',
      title: 'The Blue Umbrella (Paperback)',
      image: trend6,
      price: 70,
      rating: 5 },
      {ISBN: '9788184006711',
       title: 'You\'re Trending in My Dreams (Paperback)',
       image: trend7,
       price: 175,
       rating: 5 }
      ];


    const handleChange=(e)=>{
        e.preventDefault()
        setInput(e.target.value)
        };

    if(input.length>0) {
        searchproduct=searchproduct.filter((i)=>{
            return i.ISBN.match(input)+i.title.match(input);
            });
    }

    return (
        <div className="categorybar">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            <div className="input-group">
                                <input type="search" className="form-control"  id="search" placeholder="Search books by title, author, ISBN" onChange={handleChange} value={input} size="70"/>
                                <Link to="/searches">
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="button" >
                                            <span className="glyphicon glyphicon-search" />
                                        </button>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Searchbar;
