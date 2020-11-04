import React from 'react';
import '../../css/AboutUs.css';
import logoabout from '../../img/logo1.png';

function AboutUs() {
    return (
        <div className="aboutUs">
            <div className="div1">
                <div className="logoaboutus">
                    <img src={logoabout} alt="logo" height="50cm"/>
                </div>
                <b>About Dataroid</b>
                <p>Dataroid an e-commerce or rather an e-tailing store works on the Mission to give people the most convenient , easy and secure shopping experience on the web.</p>
                <p>Dataroid is focused to introduce more and more catalogue’s in the exciting year of 2020-2021.</p>
                <p>SapnaOnline.com is a team of experienced people from diverse backgrounds working together to fulfil 3 main objective's - benefiting customers of low prices, providing a vast catalogue selection and products and lastly a fast, reliable and a very safe payment and delivery option to the customers.</p>
            </div>

            <div className="div1">
                <b>A Brief Stats of Dataroid as on 1st April 2017</b>
                <p>Dataroid has over Half a Million (500,000) daily active and happy users and has over a Million (1,000,000) registered users.</p>
                <p>Dataroid ships over many thousand orders a day and is growing by the minute.</p>
                <p>Dataroid is Headquartered in Bangalore and has it's warehouses in New Delhi, Chennai and Bangalore.</p>
                <p>This eCommerce store has been awarded the most promising e-tailing company 2013 and has got the unique tag of the most Prompt Order and Delivery channel.</p>
                <p>Our Mission is to give you the most convenient , easy and secure shopping experience on the web.</p>
            </div>

            <div className="div1" >
                <b>CAN I WORK FOR DATAROID?</b>
                <p>If you are smart and dynamic, yes you can work with us. We are growing at a very fast pace and are seeking extremely smart people to come work with us. Send an e-mail at cs@dataroid.com and we will get back to you shortly.</p>
            </div>

            <div className="div1">  
                <address>
                    <p>REGISTERED OFFICE</p>
                    <p>Dataroid</p>
                    A1-804 ,A1-Wing,Shiv Konkan SRA<br></br>
                    Co-op Society,Janu Bohye<br></br>
                    Nagar,Malad (East)
                    <p>rahulvishwakarma6189@gmail.com</p>
                </address>
            </div>
        </div>
    )
}

export default AboutUs;
