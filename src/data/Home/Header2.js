import React from 'react';
import '../../css/Header2.css';
import {Link} from "react-router-dom";

function Header2() {
    return (
        <div className="header2">
                <div className="topnav">
                    <Link to="/notebooks">
                        <div className="category">
                                <a href="#home">Notebooks </a>
                        </div>
                    </Link>

                    <Link to="/textbooks">
                        <div className="category">
                            <a href="#home">Textbooks </a>
                        </div>
                    </Link>

                    <Link to="/craftmaterial">
                        <div className="category">
                            <a href="#home">Craft Material </a>
                        </div>
                    </Link>

                    <Link to="/bags">
                        <div className="category">
                            <a href="#home">Bags </a>
                        </div>
                    </Link>

                    <Link to="/penpencils">
                        <div className="category">
                            <a href="#home">Pens/Pencils </a>
                        </div>
                    </Link>

                    <Link to="/files">
                        <div className="category">
                            <a href="#home">Files </a>
                        </div>
                    </Link>

                    <Link to="/bottleteffins">
                        <div className="category">
                            <a href="#home">Bottel &amp; Teffins </a>
                        </div>
                    </Link>

                    <Link to="/studybooks">
                        <div className="category">
                            <a href="#home">Study Books </a>
                        </div>
                    </Link>

                    <Link to="/competitivebooks">
                        <div className="category">
                            <a href="#home">Competitive Books </a>
                        </div>
                    </Link>
                </div>
        </div>
    )
}

export default Header2;
