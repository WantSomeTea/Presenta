import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router';
import createBrowserHistory from 'history';
import './App.css';

import Routes from './routes';
import storeConfig from './store';

export const history = createBrowserHistory();
const store = storeConfig.configureStore();

class App extends Component {
    render() {
        return (
            <Provider store="store">
                <Router history={history}>
                  <Switch>
                    <Route path="/" component={Routes.MainPage} />
                    <Redirect from="*" to="/" />
                  </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
