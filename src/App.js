import React from 'react';

import PageWrapper from './components/pageWrapper';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Contact from './components/pages/Contact';
import AdminWrapper from './components/AdminWrapper';
import Login from './components/pages/Login';
function App() {
  return (
	  <Router>
		  <Route
			  path='/admin'
			  render={props => (
				  <AdminWrapper>
					  <Login />
				  </AdminWrapper>
				  
			  )}
		  />
			
		  <Route exact={true} path="/" render={props => (
			  <PageWrapper>
				  <Home {...props}/>
			  </PageWrapper>
				)} />
		  <Route path="/about" component={props => (
			  <PageWrapper>
				  <About {...props} />
			  </PageWrapper>
		  )} />
		  <Route path="/contact" component={props => (
			  <PageWrapper>
				  <Contact {...props} />
			  </PageWrapper>
		  )} />
			
		</Router>
	);
}

export default App;
