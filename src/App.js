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
                <Orders/>
              </Route>
              <Route path="/login">
                <br></br>
                <Header2/>
                <br></br>
                  <Login/>
              </Route>
              <Route path="/notebooks">
                <br></br>
                <Header2/>
                <br></br>
                  <Notebook/>
              </Route>
              <Route path="/checkout">
                  <br></br>
                  <Header2/>
                  <Checkout/>
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
              </Route>
          </Switch>
        <Footer/>
        </div>
    </Router>
    
  );
}

export default App;
