import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import NetPlanner from "./app/net-planner";
import { RestService } from "./services/rest-service";
import { RestServiceProvider } from "./rest-service-context";

import store from "./app/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const restService = new RestService();
const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RestServiceProvider value={restService}>
        <Router>
          <NetPlanner />
        </Router>
      </RestServiceProvider>
    </Provider>
  </QueryClientProvider>,
  document.getElementById("root")
);
