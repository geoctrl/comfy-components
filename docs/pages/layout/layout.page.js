import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Cards } from './cards/cards.page';
import { SelectLists } from './select-lists/select-lists.page';

export class LayoutPage extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Route path={`${match.url}/cards`} component={Cards} />
        <Route path={`${match.url}/select-lists`} component={SelectLists} />
      </div>
    );
  }
}
