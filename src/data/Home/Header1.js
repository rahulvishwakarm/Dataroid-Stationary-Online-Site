import React from 'react';
import '../../css/Header1.css';
import logo1 from '../../img/logo1.png';
import '../../css/bootstrap.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from '../../firebase';
import Searchbar from './Searchbar';

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
                <Searchbar/>
                
                <div className="header_nav">
                    <div className="header_option">
                                <Link to={!user && '/login'}> 
                                    <div onClick={handleAuthentication} className="signin">
                                        <strong><h5 className="signin_user_display">{!user ? 'Guest':user.email}</h5></strong>
                                        <span className="signin_text">{user ?
                                        'Sign Out':'Sign In'}
                                        </span>
                                    </div>
                                </Link>
                                <Link to="/orders">
                                    <div className="return">
                                        <span className="order_text">Your Orders</span>
                                    </div>
                                </Link>
                        </div>

                        <Link to="/checkout">  
                            <div className="header_basket">
                                <span className="cart_text"><ShoppingCartIcon style={{ fontSize: 25,color:"blue" }}/></span>
                                <b><span className="cart_number" style={{ color:"red" }}> {basket?.length} </span></b>
                            </div>
                        </Link>
                </div>
                    

        </div>
        
    )
}

export default Header1;
