import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Navbar from '../components/Navbar';
//import Footer from '../components/Footer'
import Home from '../pages/Home';
import Courses from '../pages/Courses';
import Teach from '../pages/Teach';
import Business from '../pages/Business';
//import Login from '../pages/Login';
//import ErrorPage from '../pages/ErrorPage';

const Routers = () => {
  return (
    <Router>
      <Switch>
        {/* <Navbar /> */}
        {/* <Route path='/' exact component={Login} /> */}
        <Route path='/courses' exact component={Courses} />
        <Route path='/teach' exact component={Teach} />
        <Route path='/business' exact component={Business} />
        <Route path='/home' exact component={Home} />
        {/* <Route component={ErrorPage}/> */}
      </Switch>
    </Router>
  );
};

export default Routers;
