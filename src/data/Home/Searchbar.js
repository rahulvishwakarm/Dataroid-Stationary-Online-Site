import React from 'react';
import '../../css/Searchbar.css';
import '../../css/bootstrap.css';

function Searchbar() {
    return (
        <div className="categorybar">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            <div className="input-group">
                            <input type="text" className="form-control"  id="search" placeholder="Search books by title, author, ISBN" />
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button" >
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
