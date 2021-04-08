import React from 'react';
import '../../css/footer.css';
import ContactUs from '../Contact Us/ContactUs';
import { Link } from 'react-router-dom';

function Footer() {
    return (
            <div className="footer">
                    <footer className="footer-distributed">
                        <div className="footer-left">
                        <h3>Data<span>roid</span></h3>
                        <p className="footer-links">
                            <Link to="/">
                                Home                            
                            </Link>
                            |
                            <a href="https://www.blogger.com/">Blog</a>
                            |
                            <Link to="/aboutus">
                                About Us    
                            </Link>
                            |
                            <Link to="/contactus">
                                ContactUs
                            </Link>
                        </p>
                        <p className="footer-company-name">All Rights Reserved</p>
                        <p className="footer-company-name">Developed by Rahul Vishwakarma</p>
                        </div>
                        <div className="footer-center">
                        <div>
                            <a href="https://www.google.com/maps/place/Omkar+SRA+Building+A1/@19.1832043,72.8578459,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7b7044e0a5df7:0xa007fce141befa1d!8m2!3d19.1831992!4d72.8600346"><i className="fa fa-map-marker" id="n" /></a>
                            <p style={{fontSize: 'small'}}>A1-Wing,Shiv Konkan 
                            Omkar SRA Janu Bohye Nagar<br />
                            Malad, Mumbai - 400097</p>
                        </div>
                        <div>
                            <a href="https://www.truecaller.com/search/in/9167279641"><i className="fa fa-phone" /></a>
                            <p style={{fontSize: 'small'}}>9167279641</p>
                        </div>
                        <div>
                            <a href="https://mail.google.com/mail/u/0/"><i className="fa fa-envelope" /></a>
                            <p style={{fontSize: 'small'}}><a href="mailto:support@eduonix.com">rahulvishwakarma6189@gmail.com</a></p>
                        </div>
                        </div>
                        <div className="footer-right">
                        <p className="footer-company-about">
                            <span style={{fontSize: 'large'}}>Stationary</span>
                            <span style={{color
                            : 'orange', fontSize: 'small'}}>We Sell Stationary Products In All Category</span></p>
                        <div className="footer-icons">
                            <a href="https://www.facebook.com/" style={{backgroundColor: 'blue', color: 'white'}}><i className="fa fa-facebook" /></a>
                            <a href="https://twitter.com/" style={{backgroundColor: '#03fcf0', color: 'white'}}><i className="fa fa-twitter" /></a>
                            <a href="https://www.instagram.com/" style={{backgroundColor: 'white', color: '#F05283'}}><i className="fa fa-instagram" /></a>
                            <a href="https://www.linkedin.com/" style={{backgroundColor: 'white', color: 'blue'}}><i className="fa fa-linkedin" /></a>
                            <a href="https://youtube.com/" style={{backgroundColor: 'red', color: 'white'}}><i className="fa fa-youtube" /></a>
                        </div>
                        <div className="footer-icons">
                            <h4 style={{color: 'white', fontSize: 'small'}}>We Accept</h4><br />
                            <a href="https://www.americanexpress.com/in/" style={{color: 'blue'}} title="American Express card"><i class="fa fa-cc-amex"></i></a>
                            <a href="https://www.visa.co.in/" style={{color: 'white', backgroundColor: 'red'}} title="Visa Debit Card"><i className="fa fa-cc-visa" /></a>
                            <a href="https://www.visa.co.in/pay-with-visa/find-a-card/credit-cards.html" style={{backgroundColor: 'green'}} title="Credit Card"><i className="fa fa-credit-card" /></a>
                            <a href="https://en.wikipedia.org/wiki/Cash_on_delivery" style={{backgroundColor: 'orange'}} title="Cash On Delivery"><i className="fa fa-money" /></a>
                        </div>
                        </div>
                    </footer>
            </div>

    )
}

export default Footer;
