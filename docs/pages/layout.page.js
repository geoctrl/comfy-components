import React from 'react';
import { Route } from 'react-router-dom';

import { Cards } from './layout/cards';
import { SelectLists } from './layout/select-lists/select-lists.page';

export function LayoutPage(props) {
  const baseUrl = props.match.url;
  return (
    <div>
      <Route path={`${baseUrl}/cards`} component={Cards} />
      <Route path={`${baseUrl}/select-lists`} component={SelectLists} />
    </div>
  );
}