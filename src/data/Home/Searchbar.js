import React from 'react';
import '../../css/Searchbar.css';
import '../../css/bootstrap.css';

function Searchbar() {
    return (
        <div className="categorybar">
                <div className="container">
                    <div className="row">    
                    <div className="col-xs-8 col-xs-offset-2">
                        <div className="input-group">
                        <div className="input-group-btn search-panel">
                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                            <span id="search_concept">All</span> <span className="caret" />
                            </button>
                            <ul className="dropdown-menu scrollable-dropdown" role="menu">
                            <li><a href="https://www.google.com/">Automotive Accesories</a></li>
                            <li><a href="https://www.google.com/">Cell Phone Accesories</a></li>
                            <li><a href="https://www.google.com/">Computer Accesories</a></li>
                            <li><a href="https://www.google.com/">Health and Personal Care</a></li>
                            <li><a href="https://www.google.com/">Automotive Accesories</a></li>
                            <li><a href="https://www.google.com/">Cell Phone Accesories</a></li>
                            <li><a href="https://www.google.com/">Computer Accesories</a></li>
                            <li><a href="https://www.google.com/">Health and Personal Care</a></li>
                            <li><a href="https://www.google.com/">Automotive Accesories</a></li>
                            <li><a href="https://www.google.com/">Cell Phone Accesories</a></li>
                            <li><a href="https://www.google.com/">Computer Accesories</a></li>
                            <li><a href="https://www.google.com/">Health and Personal Care</a></li>
                            <li><a href="https://www.google.com/">Automotive Accesories</a></li>
                            <li><a href="https://www.google.com/">Cell Phone Accesories</a></li>
                            <li><a href="https://www.google.com/">Computer Accesories</a></li>
                            <li><a href="https://www.google.com/">Health and Personal Care</a></li>
                            </ul>
                        </div>
                        <input type="hidden" name="search_param" defaultValue="all" id="search_param" />
                        <input type="text" className="form-control" name="x" id="search" placeholder="Search books by title, author, ISBN" />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button">
                                <span className="glyphicon glyphicon-search" />
                            </button>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Searchbar;
