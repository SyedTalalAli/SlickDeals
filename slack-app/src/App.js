import React,{useEffect} from 'react';
import Header from "./components/Header"
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Checkout from './components/Checkout'
import Login from './components/Login'
import { auth } from './components/firebase';
import { useStateValue} from "./components/StateProvider"
// import
function App() {
const [{},dispatch]=useStateValue();

  useEffect (()=>{
    auth.onAuthStateChanged(authUser => {
      console.log("The user is --->",authUser);
      if(authUser){
        ////The user just Logged in / the user was Loggin in
          dispatch({
              type: 'SET_USER',
              user: authUser})
      }
else{
  // the use is logged out
  dispatch({
      type:'SET_USER',
      user: null

  })
}

    })

  } ,[])


  return (

<Router>

    <div className="app">
             
<Switch>

      <Route path="/login"  >
      <Login />

      </Route>
        <Route path="/checkout">
        <Header />
        <Checkout />
        </Route>
        <Route path="/">   
             <Header />

             <Home />
        </Route>
       </Switch>
    </div>
    </Router>

  );
}

export default App;
