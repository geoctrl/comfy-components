import React, { Component } from 'react';
import { Scoped, k } from 'kremling';
import { BrowserRouter, Route } from 'react-router-dom';

import { ComponentsPage } from './pages/components.page';
import { HomePage } from "./pages/home.page";
import { Header } from "./layout/header.component";
import { LayoutPage } from './pages/layout.page';

export class Root extends Component {
  render() {
    return (
      <>
        {/*<Header />*/}
        <BrowserRouter>
          <Scoped css={css}>
            <div className="wrapper">
              <Route path="/" exact component={HomePage} />
              <Route path="/components" component={ComponentsPage} />
              <Route path="/layout" component={LayoutPage} />
            </div>
          </Scoped>
        </BrowserRouter>
      </>
    );
  }
}

const css = k`
  .wrapper {
    padding: 3.2rem;
    max-width: 120rem;
    margin: 0 auto;
  }
`;
