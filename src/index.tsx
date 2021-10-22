import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import NetPlanner from './app/net-planner';
import { RestService } from './services/rest-service';
import { RestServiceProvider } from './rest-service-context';

import store from './app/store';

const restService = new RestService();

ReactDOM.render(
  <Provider store={store}>
      <RestServiceProvider value={restService}>
        <Router>
          <NetPlanner />
        </Router>
      </RestServiceProvider>
  </Provider>,
  document.getElementById('root')
);