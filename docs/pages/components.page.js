import React from 'react';
import { Route } from 'react-router-dom';

import { Buttons } from './components/buttons';
import { Forms } from "./components/forms";
import { Header } from '../layout/header.component';

export function ComponentsPage(props) {
  const baseUrl = props.match.url;
  return (
    <div>
      <Route path={`${baseUrl}/buttons`} component={Buttons} />
      <Route path={`${baseUrl}/forms`} component={Forms} />
    </div>
  );
}