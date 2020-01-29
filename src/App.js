import React from 'react';

import { Router, Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./redcuers";
import { useAuth0 } from "./react-auth0-spa";
import history from './utils/history';
import './App.scss';

import Homepage from './components/homepage/homepage';
import Navbar from './components/navbar/navbar';
import NoMatch from "./components/noMatch";
import Footer from './components/footer';
import VideoPage from './components/player/videoPage';
import Demo from './components/demo';
import SearchPage from './components/searchPage/searchPage';
import Patreon from './components/patreon/patreon';
import SchedulePage from './components/schedulePage';


const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));
function App() {

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="App">
          <header className="App-header">
            <Navbar/>
              <Router history={history}>
                <Switch>
                  <Route path="/" exact component={Homepage}/>
                  <Route path='/patreon' exact component={Patreon}/>
                  <Route path="/schedule" exact component={SchedulePage}/>
                  <Route path='/video-player/:slug' exact component={VideoPage}/>
                  <Route path='/search/:slug' exact component={SearchPage}/>
                  <Route path='/demo' exact component={Demo}/>
                  <Route component={NoMatch}/>
                </Switch>
              </Router>
            <Footer/>
            {/* <PlaylistBar/> */}
          </header>
        </div>
      </Provider>
  );
}

export default App;
