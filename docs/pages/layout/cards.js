import React from 'react';
import { Button } from '../../../src';

export function Cards() {
  return (
    <div>
      <div className="cf-card p-md">
        <p>
          hey
        </p>
        <div className="text-right">
          <Button actionType="flat" className="mr-md">Cancel</Button>
          <Button actionType="primary">Submit</Button>
        </div>
      </div>
    </div>
  );
}

Cards.propTypes = {};