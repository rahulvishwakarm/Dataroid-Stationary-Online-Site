import React from 'react';
import '../../css/Searchbar.css';
import '../../css/bootstrap.css';
import { Link } from 'react-router-dom';

function Searchbar() {
    return (
        <div className="categorybar">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            <div className="input-group">
                                <input type="search" className="form-control"  id="search" placeholder="Search books by title, author, ISBN"  size="70"/>
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
