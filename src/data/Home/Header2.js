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
                    <Link to="/textbooks">
                        <div className="category">
                            <a href="#home">Textbooks <span className="fa fa-caret-down" /></a>
                        </div>
                    </Link>
                    <Link to="/craftmaterial">
                        <div className="category">
                            <a href="#home">Craft Material <span className="fa fa-caret-down" /></a>
                        </div>
                    </Link>
                    <Link to="/bags">
                        <div className="category">
                            <a href="#home">Bags <span className="fa fa-caret-down" /></a>
                        </div>
                    </Link>
                    <Link to="/penpencils">
                        <div className="category">
                            <a href="#home">Pens/Pencils <span className="fa fa-caret-down" /></a>
                        </div>
                    </Link>
                    <Link to="/files">
                        <div className="category">
                            <a href="#home">Files <span className="fa fa-caret-down" /></a>
                        </div>
                    </Link>
                    <Link to="/bottleteffins">
                        <div className="category">
                            <a href="#home">Bottel &amp; Tiffins <span className="fa fa-caret-down" /></a>
                        </div>
                    </Link>        
                    <Link to="/studybooks">
                        <div className="category">
                            <a href="#home">Study Books <span className="fa fa-caret-down" /></a>
                        </div>
                    </Link>
                    <Link to="/competitivebooks">
                        <div className="category">
                            <a href="#home">Competitive Books <span className="fa fa-caret-down" /></a>
                        </div>
                    </Link>
                </div>
        </div>
    )
}

export default Header2;
