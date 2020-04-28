import React, { Component } from 'react';
import { Scoped, k } from 'kremling';

export class SideNav extends Component {
  render() {
    return (
      <Scoped css={css}>
        <div className="side-nav">
          side nav
        </div>
      </Scoped>
    );
  }
}

const css = k`
  .side-nav {
    background-color: $color-primary-900;
    width: 280rem;
    flex-shrink: 0;
    flex-grow: 0;
  }
`;