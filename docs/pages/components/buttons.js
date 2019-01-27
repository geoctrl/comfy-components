import React from 'react';
import { Scoped } from 'kremling';
import { Button } from "../../../src/components/button.component";

export function Buttons() {
  return (
    <Scoped css={css} namespace="buttons">
      <div className="buttons">
        <h1>Buttons</h1>
        <div className="mb-md">
          <div className="mb-sm">
            <Button actionType="primary">Primary</Button>
          </div>
          <div className="mb-sm">
            <Button actionType="secondary">Secondary</Button>
          </div>
          <div className="mb-sm">
            <Button actionType="flat">Flat</Button>
          </div>
        </div>
      </div>
    </Scoped>
  );
}

Buttons.propTypes = {};

const css = `
  & .buttons__example {
    
  }
`;