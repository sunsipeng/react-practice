import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute,ReactRouter } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';
import About from './pages/About';
import Index from './Components/Home';
import Login from './pages/Login';

ReactDOM.render(
	<HashRouter>
	   <Index>
	     {/*<Route exact path="/" component={Index} />*/}
	     <Route exact path="/login" component={Login} />
	     <Route path="/about" component={About} />
	   </Index>
	</HashRouter>,
	document.getElementById('app')
);