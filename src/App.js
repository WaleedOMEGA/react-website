import React from 'react';

import PageWrapper from './components/pageWrapper';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <PageWrapper>
      <Router>
        <Route
          path='/home'
          
          />
      </Router>
        
        
      <Home/>
    </PageWrapper>
  );
}

export default App;
