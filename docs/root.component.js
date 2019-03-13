import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { ComponentsPage } from './pages/components.page';
import { HomePage } from "./pages/home.page";
import { Header } from "./layout/header.component";
import { LayoutPage } from './pages/layout.page';
import { useCss } from 'kremling';

export function Root() {
  const scope = useCss(css);
  return (
    <>
      {/*<Header />*/}
      <BrowserRouter>
        <div {...scope} className="wrapper">
          <Route path="/" exact component={HomePage} />
          <Route path="/components" component={ComponentsPage} />
          <Route path="/layout" component={LayoutPage} />
        </div>
      </BrowserRouter>
    </>
  );
}

const css = `
  & .wrapper {
    padding: 3.2rem;
    max-width: 120rem;
    margin: 0 auto;
  }
`;