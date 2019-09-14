import React, { Component } from 'react';

import { Preview } from '../../../common/preview.component';
import CardsExample from './cards.example';
import CardsExampleRaw from '!doc-loader!./cards.example';

export class Cards extends Component {
  render() {
    return (
      <div>
        <h1 className="comfy-title">Cards</h1>
        <Preview
          title=".cf-card"
          example={CardsExample}
          raw={CardsExampleRaw}
        >
          <p>
            Build a simple white card.<br />
            <strong>Note:</strong> We try not to make assumptions about how cards are
            used, so cards don't have padding or margin by default.
          </p>
        </Preview>

      </div>
    );
  }
}
