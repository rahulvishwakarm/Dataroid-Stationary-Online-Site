import React from 'react';
import deal1 from '../../img/todaysdeal/deal1.jpg';
import deal2 from '../../img/todaysdeal/deal2.jpg';
import deal3 from '../../img/todaysdeal/deal3.jpg';
import deal4 from '../../img/todaysdeal/deal4.jpg';
import '../../css/Deal.css';

function Deal() {
    return (
        <div className="deal">
            <div className="deal-1">
                <a href="https://www.google.com/"><img alt="deal1" src={deal1} width={322} height={130} /></a>
            </div>
            <div className="deal-2">
                <a href="https://www.google.com/"><img alt="deal1" src={deal2} width={322} height={130} /></a>
            </div>
            <div className="deal-3">
                <a href="https://www.google.com/"><img alt="deal1" src={deal3} width={322} height={130} /></a>
            </div>
            <div className="deal-4">
                <a href="https://www.google.com/"><img alt="deal1" src={deal4} width={322} height={130} /></a>
            </div>
        </div>
    )
}

export default Deal;
