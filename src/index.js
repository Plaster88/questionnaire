import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from "react-dom";
import App from './components/App';
import Questions from './components/questions';
import Feedback from './components/feedback';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';

const history = createHistory();
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route path="/personality-test/:id/feedback">
              <Feedback />
            </Route>
            <Route path="/personality-test/:id">
              <Questions />
            </Route>
            <Route path="/" component={() => 'PAGE NOT FOUND'} />
          </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
