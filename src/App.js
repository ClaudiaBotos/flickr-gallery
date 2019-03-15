import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

// App Components
import InputResult from './Components/Header/InputResult';
import SearchForm from './Components/Header/SearchForm';
import Container from './Components/MainContainer/Container';
import ErrorPage from './Components/ErrorPage';
import NotFound from './Components/MainContainer/NotFound';

const App =(props) => (
  <BrowserRouter>
  <div className="container">
 <Switch>

 <Route exact path="/" component={() => <Container query="flowers" />} />
          <Route path="/flowers" component={ () => <Container query="flowers" /> } />
          <Route path="/castles" component={ () => <Container query="castles" /> } />
          <Route path="/nature" component={ () => <Container query="nature" /> } />
          <Route exact path= "/search"  component={SearchForm} />
          <Route path="/search/:query" component={InputResult}/>
          <Route path='*' component={ErrorPage} />
          <Route component={NotFound}/>



</Switch>
   </div>

  </BrowserRouter>
);




export default App;
