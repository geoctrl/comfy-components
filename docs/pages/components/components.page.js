import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Buttons } from './buttons';
import { Forms } from "./forms";

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
