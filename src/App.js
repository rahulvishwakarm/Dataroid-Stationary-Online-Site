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
        <br></br>
        <Header2/>
          <Switch>
              <Route path="/login">
                <br></br>
                  <Login/>
              </Route>
              <Route path="/checkout">
                  <Checkout/>
              </Route>
              <Route path="/">
                  <Slider/><br></br>
                  <Deal/>
                  <Product/>
              </Route>
          </Switch>
        <Footer/>
        </div>
    </Router>
    
  );
}

export default App;
