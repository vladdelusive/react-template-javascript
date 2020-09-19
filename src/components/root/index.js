import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MainPage, NotFoundPage } from "pages"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route page="main" path="/" exact component={MainPage} />
        <Route page="not-found" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export { App };
