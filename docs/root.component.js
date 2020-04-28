import React, { Component } from 'react';
import { Scoped, k } from 'kremling';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { ComponentsPage } from './pages/components/components.page';
import { HomePage } from "./pages/home.page";
import { Header } from "./layout/header.component";
import { LayoutPage } from './pages/layout/layout.page';
import { SideNav } from './pages/layout/side-nav.component';
import { Buttons } from './pages/components/buttons';
import { Forms } from './pages/components/forms';

export class Root extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Route
            path="/"
            render={(props) => (
              <Scoped css={css}>
                <div className="root">
                  <SideNav {...props} />
                  <div className="root-content">
                    <Switch>
                      <Route path="/" exact component={HomePage} />
                      <Route path="/components/buttons" component={Buttons} />
                      <Route path="/components/forms" component={Forms} />
                      <Route path="/layout" component={LayoutPage} />
                      <Redirect to="/" />
                    </Switch>
                  </div>
                </div>
              </Scoped>
            )}
          />
        </BrowserRouter>
      </>
    );
  }
}

const css = k`
  .root {
    position: absolute;
    height: 100vh;
    overflow: hidden;
    display: flex;
    width: 100vw;
  }
  .root-content {
    flex-grow: 1;
  }
`;
