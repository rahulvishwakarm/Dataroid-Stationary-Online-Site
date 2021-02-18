import React from 'react';
import TodaysBackgroungImage from '../../img/TodaysDealBackground.png';
import BTS1 from '../../img/BackToSchool1.jpg';
import BTS2 from '../../img/BackToSchool2.jpg';
import '../../css/BackToSchool.css';
import {Link} from "react-router-dom";


function BackToSchool() {
    return (
        <div>
            <div>
                <div style={{backgroundImage: `url(${TodaysBackgroungImage})`}} className="Back-To-School" >
                    <b><small  >Back to School</small></b>
                </div><br />
                <div className="imagesBacktoSchool">
                    <div className="BacktoSch1">
                        <Link to="/textbooks">
                            <img src={BTS1} alt="Backtoschool1" height="290.364" width="652.011"/>
                        </Link>
                    </div>
                    <div className="BacktoSch2">
                        <Link to="/">
                            <img src={BTS2} alt="Backtoschool1" height="290.364" width="652.011"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackToSchool;
