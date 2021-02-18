import React,{useEffect} from 'react';
import Header1 from './data/Home/Header1';
import Header2 from './data/Home/Header2';
import Slider from './data/Home/Slider';
import Deal from './data/Home/Deal';
import Product from './data/Home/Product';
import Footer from './data/footer/Footer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Checkout from './data/Home/Checkout';
import Login from './data/Home/Login';
import {auth} from './firebase';
import { useStateValue } from './data/Home/StateProvider';
import Payment from './data/Home/Payment';
import { loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './data/Home/Orders';
import Trending from './data/Home/Trending';
import Notebook from './data/Home/Notebook';
import Textbook from './data/Home/Textbook';
import CraftMaterial from './data/Home/CraftMaterial';
import Bag from './data/Home/Bag';
import PenPencil from './data/Home/PenPencil';
import File from './data/Home/File';
import BottleTeffin from './data/Home/BottleTeffin';
import StudyBook from './data/Home/StudyBook';
import CompetitiveBook from './data/Home/CompetitiveBook';
import Slide1 from './data/Slide/Slide1';
import Slide2 from './data/Slide/Slide2';
import Slide3 from './data/Slide/Slide3';
import Slide4 from './data/Slide/Slide4';
import Slide5 from './data/Slide/Slide5';
import ContactUs from './data/Contact Us/ContactUs';
import AboutUs from './data/About Us/AboutUs';
import BackToSchool from './data/Home/BackToSchool';

const promise = loadStripe('pk_test_51HeESrEadnBlyJHvD98S5JtfX0b2TIzBxPAGG8U1unQjngQ8DQDfBpVZ4vHhEgPqGgTbDbLMv81QGtnFu5EO02g000SVJVkyx7');

function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log('The user is >>>',authUser);

      if(authUser){
          //User is logedIn
          dispatch({
            type:"SET_USER",
            user:authUser
          })
      }else{
          //User Loged Out
          dispatch({
            type:"SET_USER",
            user:null
          })
      }
    })
  }, [])


  return (
    <Router>
        <div className="App">
        <Header1/>
          <Switch>

              <Route path="/orders">
                <hr></hr>
                <Orders/>
              </Route>

              <Route path="/login">
                <hr></hr>
                <br></br>
                  <Login/>
              </Route>

              <Route path="/notebooks">
                <br></br>
                <Header2/>
                <br></br>
                  <Notebook/>
              </Route>

              <Route path="/textbooks">
                <br></br>
                <Header2/>
                <br></br>
                  <Textbook/>
              </Route>

              <Route path="/craftmaterial">
                <br></br>
                <Header2/>
                <br></br>
                  <CraftMaterial/>
              </Route>

              <Route path="/bags">
                <br></br>
                <Header2/>
                <br></br>
                  <Bag/>
              </Route>

              <Route path="/penpencils">
                <br></br>
                <Header2/>
                <br></br>
                  <PenPencil/>
              </Route>

              <Route path="/files">
                <br></br>
                <Header2/>
                <br></br>
                  <File/>
              </Route>

              <Route path="/bottleteffins">
                <br></br>
                <Header2/>
                <br></br>
                  <BottleTeffin/>
              </Route>

              <Route path="/studybooks">
                <br></br>
                <Header2/>
                <br></br>
                  <StudyBook/>
              </Route>

              <Route path="/competitivebooks">
                <br></br>
                <Header2/>
                <br></br>
                  <CompetitiveBook/>
              </Route>

              <Route path="/slider1">
                <br></br>
                <Header2/>
                <br></br>
                  <Slide1/>
              </Route>

              <Route path="/slider2">
                <br></br>
                <Header2/>
                <br></br>
                  <Slide2/>
              </Route>

              <Route path="/slider3">
                <br></br>
                <Header2/>
                <br></br>
                  <Slide3/>
              </Route>

              <Route path="/slider4">
                <br></br>
                <Header2/>
                <br></br>
                  <Slide4/>
              </Route>

              <Route path="/slider5">
                <br></br>
                <Header2/>
                <br></br>
                  <Slide5/>
              </Route>

              <Route path="/checkout">
                  <br></br>
                  <Header2/>
                  <Checkout/>
              </Route>

              <Route path="/contactus">
                  <br></br>
                  <ContactUs/>
              </Route>

              <Route path="/aboutus">
                  <br></br>
                  <Header2/>
                  <AboutUs/>
              </Route>

              <Route path="/payment">
                  <Elements stripe={promise}>
                    <Payment/>
                  </Elements>
              </Route>

              <Route path="/">
                  <br></br>
                  <Header2/>
                  <Slider/><br></br>
                  <Deal/>
                  <hr></hr>
                  <Product/>
                  <hr></hr>
                  <Trending/>
                  <hr></hr>
                  <BackToSchool/>
              </Route>
              
          </Switch>
        <Footer/>
        </div>
    </Router>
    
  );
}

export default App;
