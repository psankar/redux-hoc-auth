import React, {Component} from 'react';
import './App.css';

import Header from './components/header';
import Home from './components/home';
import PublicPage from './components/public_page';
import PrivatePage from './components/private_page';
import rootReducer from './reducers/index';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(rootReducer)}>
        <div className="App">
          <div className="App-header">
            <Header/>
          </div>
          <div>
            <Router history={browserHistory}>
              <Route path="/" component={Home}>
                <IndexRedirect to="/public"/>
                <Route path="public" component={PublicPage}></Route>
                <Route path="private" component={PrivatePage}></Route>
              </Route>
            </Router>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;