import React from 'react';

import PageWrapper from './components/pageWrapper';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Contact from './components/pages/Contact';

function App() {
  return (
		<Router>
			<PageWrapper>
				<Route exact={true} path="/" component={Home} />
				<Route path="/about" component={About} />
			 	 <Route path="/contact" component={Contact} />
			</PageWrapper>
		</Router>
	);
}

export default App;
