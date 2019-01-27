import React from 'react';
import { Route } from 'react-router-dom';
import { Scoped } from 'kremling';

import { Buttons } from './components/buttons';
import { Forms } from "./components/forms";

export function ComponentsPage(props) {
  const baseUrl = props.match.url;
  console.log(`${baseUrl}/buttons`)
  return (
    <Scoped css={css}>
      <div className="comps">
        {/*<div className="comps__sidebar">*/}
          {/*Introduction*/}
        {/*</div>*/}
        <Route path={`${baseUrl}/buttons`} component={Buttons} />
        <Route path={`${baseUrl}/forms`} component={Forms} />
      </div>
    </Scoped>
  );
}

const css = `
  & .comps {
    padding: 3.2rem;
    display: flex;
  }
  
  & .comps__sidebar {
    width: 26rem;
    background-color: #404040;
    border-radius: .6rem;
    margin-right: 3.2rem;
    padding: 1.6rem; 
    color: #e3e3e3;
    font-size: 1.6rem;
    font-weight: 700;
  }
`;