import React, { Component } from 'react';
import { Scoped, k } from 'kremling';

import { Preview } from '../../../common/preview.component';

import SelectListExample from './select-list.example';
import selectListExampleRaw from '!doc-loader!./select-list.example';

import SelectListDivider from './select-list-divider.example';
import selectListDividerRaw from '!doc-loader!./select-list-divider.example';

export class SelectLists extends Component {
  render() {
    return (
      <Scoped css={css}>
        <div>
          <h1 className="comfy-title">Select Lists</h1>

          <Preview
            title=".select-list"
            example={SelectListExample}
            raw={selectListExampleRaw}
          >
            <p>
              Build a simple select list of buttons and/or links.<br />
              These styles work great using the <code>.card</code> class.
            </p>
          </Preview>

          <Preview
            title=".select-list__divider"
            example={SelectListDivider}
            raw={selectListDividerRaw}
          >
            <p>
              Separate list items with a line divider.
            </p>
          </Preview>
        </div>
      </Scoped>
    );
  }
}

const css = k``;
