import React from 'react';
import {Home, Review, ViewReviews, HowThisWorks} from './pages'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Header, Footer} from './display'

import styled from 'styled-components'

const AppWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: space-between;
`

function App() {
  return (
    <AppWrapper>
      <Router>
        <Header />
          <Switch>
              <Route path='/review' component={Review}/>
              <Route path='/all-reviews' component={ViewReviews}/>
              <Route path='/' component={Home}/>
          </Switch>  
        <Footer />
      </Router>
    </AppWrapper>
  );
}

export default App;