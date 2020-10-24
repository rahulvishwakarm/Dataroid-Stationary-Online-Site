import React from 'react';
import '../../css/Header2.css';
import {Link} from "react-router-dom";

function Header2() {
    return (
        <div className="header2">
                <div className="topnav">
                    <Link to="/notebooks">
                        <div className="category">
                                <a href="#home">Notebooks <span className="fa fa-caret-down" /></a>
                            
                        </div>
                    </Link>
                    <div className="category">
                        <a href="#home">Textbooks <span className="fa fa-caret-down" /></a>
                    </div>
                    <div className="category">
                        <a href="#home">All books <span className="fa fa-caret-down" /></a>
                    </div>
                    <div className="category">
                        <a href="#home">Calculators <span className="fa fa-caret-down" /></a>
                    </div>
                    <div className="category">
                        <a href="#home">Pens <span className="fa fa-caret-down" /></a>
                    </div>
                    <div className="category">
                        <a href="#home">Files <span className="fa fa-caret-down" /></a>
                    </div>
                    <div className="category">
                        <a href="#home">Bottel &amp; Tiffins <span className="fa fa-caret-down" /></a>
                    </div>
                    <div className="category">
                        <a href="#home">Study Books <span className="fa fa-caret-down" /></a>
                    </div>
                    <div className="category">
                        <a href="#home">Accesories <span className="fa fa-caret-down" /></a>
                    </div>
                </div>
        </div>
    )
}

export default Header2;
