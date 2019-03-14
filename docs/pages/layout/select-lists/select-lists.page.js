import React from 'react';
import { useCss } from 'kremling';

import { Preview } from '../../../common/preview.component';

import SelectListExample from './select-list.example';
import selectListExampleRaw from '!raw-loader!./select-list.example';

import SelectListDivider from './select-list-divider.example';
import selectListDividerRaw from '!raw-loader!./select-list-divider.example';

export function SelectLists() {
  const scope = useCss(css);
  return (
    <div {...scope}>
      <h1 className="comfy-title">Select Lists</h1>

      <Preview
        title=".cf-list"
        example={<SelectListExample />}
        raw={selectListExampleRaw}
      >
        <p>
          Build a simple select list of buttons and/or links.<br />
          These styles work great using the <code>.cf-card</code> class.
        </p>
      </Preview>

      <Preview
        title=".cf-list__divider"
        example={<SelectListDivider/>}
        raw={selectListDividerRaw}
      >
        <p>
          Separate list items with a line divider.
        </p>
      </Preview>
    </div>
  );
}

const css = ``;