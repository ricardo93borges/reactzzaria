import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import configStore from "./reducers/configStore";
import ErrorsBoundary from './error';

import MainPage from './pages/main'
import Login from './pages/login'

const store = configStore();

ReactDOM.render(
  <ErrorsBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={MainPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </ErrorsBoundary>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
