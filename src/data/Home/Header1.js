import React from 'react';
import '../../css/Header1.css';
import logo1 from '../../img/logo1.png';
import '../../css/bootstrap.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from '../../firebase';

function Header1() {
    const [{basket,user},dispatch] = useStateValue();

    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }
    
    return (
        <div className="header1">

            {/*Logo*/}
            <Link to="/">
                <div className="logo">
                    <img src={logo1} alt="logo" height="55" />
                </div>
            </Link>

            {/*New Search*/}
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
                <div className="header_nav">
                    <div className="header_option">
                                <Link to={!user && '/login'}> 
                                    <div onClick={handleAuthentication} className="signin">
                                        <span className="signin_text">{user ?
                                        'Sign Out':'Sign In'}
                                        </span>
                                    </div>
                                </Link>
                                <div className="order">
                                    <span className="order_text">Returns</span>
                                </div>
                        </div>

                        <Link to="/checkout">  
                            <div className="header_basket">
                                <span className="cart_text"><ShoppingCartIcon style={{ fontSize: 25 }}/></span>
                                <b><span className="cart_number" > {basket?.length} </span></b>
                            </div>
                        </Link>
                </div>
                    

        </div>
        
    )
}

export default Header1;
