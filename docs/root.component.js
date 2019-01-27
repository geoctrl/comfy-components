import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { ComponentsPage } from './pages/components.page';
import { HomePage } from "./pages/home.page";

export function Root() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/components" component={ComponentsPage} />
      </div>
    </BrowserRouter>
  );
}