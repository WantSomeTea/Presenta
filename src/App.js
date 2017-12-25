import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';

import Routes from './routes';
import { configureStore } from './store';

export const history = createBrowserHistory();
const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                  <Switch>
                    <Route path="/" component={Routes.MainPageRoute} />
                    <Redirect from="*" to="/" />
                  </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
