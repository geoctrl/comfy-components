import React, { Component, Children } from 'react';
import { Scoped, k } from 'kremling';

export class InputButtonGroup extends Component {
  render() {
    return (
      <Scoped css={css}>
        <div className="input-button-group">
          {this.props.children}
        </div>
      </Scoped>
    );
  }
}

const css = k`
  .input-button-group {
    display: flex;
    
    > *:first-child input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: none;
    }
    
    > *.button:last-child,
    > *.dropdown:last-child > .dropdown-trigger > button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;