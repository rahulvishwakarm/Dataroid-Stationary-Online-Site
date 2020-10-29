
import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../../css/slider.css';
import 'react-slideshow-image/dist/styles.css';
import stat1 from '../../img/stat1.png';
import stat2 from '../../img/stat2.jpg';
import stat3 from '../../img/stat3.jpg';
import stat4 from '../../img/stat4.jpg';
import stat5 from '../../img/stat5.jpg';
import { Link } from 'react-router-dom';

const slideImages = [
  stat1,
  stat2,
  stat3,
  stat4,
  stat5
];

const Slider = () => {
    return (
      <div>
        <Slide easing="ease">

          <Link to="/slider1">
              <div className="each-slide">
                  <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                  </div>
              </div>
          </Link>
            
          <Link to="/slider2">
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              </div>
            </div>
          </Link>
          
          <Link to="/slider3">
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              </div>
            </div>
          </Link>  

          <Link to="/slider4">
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              </div>
            </div>
          </Link>
          
          <Link to="/slider5">
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
              </div>
            </div>
          </Link>
          
        </Slide>
      </div>
    )
};

export default Slider;