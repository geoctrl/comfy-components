import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Buttons } from './components/buttons';
import { Forms } from "./components/forms";

export class ComponentsPage extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Route path={`${match.url}/buttons`} component={Buttons} />
        <Route path={`${match.url}/forms`} component={Forms} />
      </div>
    );
  }
}
