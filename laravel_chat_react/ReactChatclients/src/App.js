import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Message from './components/Message'
import Login from './components/login'
import Profile from './components/profile'
import Register from './components/register'
import Home from './components/home'
import Forgot from './components/forgot'
import Reset from './components/reset'

function App() {
  return (
    <Router>
      <div className="App">
       
        
      
        <div className="container">
      <Route path='/profile' component={Profile}/>
      <Route path='/login' component={Login}/>
	    <Route path='/register' component={Register}/>
      <Route path='/message' component={Message}/>
	    <Route path='/home' component={Home}/>
	    <Route path='/forgotpassword' component={Forgot}/>
	    <Route path='/password/reset/:token' component={Reset}/>
          
        </div>
      </div>
    </Router>
  );
}
export default App;
