import React, { Component } from 'react';
import { Scoped, k } from 'kremling';
import { Button } from "../../../src/components/button.component";

export class Buttons extends Component {
  render() {
    return (
      <Scoped css={css}>
        <div className="buttons">
          <h1>Buttons</h1>
          <div className="mb-md">
            <div className="mb-sm">
              <Button action="primary">Primary</Button>
            </div>
            <div className="mb-sm">
              <Button action="secondary">Secondary</Button>
            </div>
            <div className="mb-sm">
              <Button action="flat">Flat</Button>
            </div>
          </div>
        </div>
      </Scoped>
    );
  }
}

const css = k``;
