
import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../../css/slider.css';
import 'react-slideshow-image/dist/styles.css';
import stat1 from '../../img/stat1.png';
import stat2 from '../../img/stat2.jpg';
import stat3 from '../../img/stat3.jpg';
import stat4 from '../../img/stat4.jpg';
import stat5 from '../../img/stat5.jpg';

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
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slider;