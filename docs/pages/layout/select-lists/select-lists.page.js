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

      <p>
        <code>.cf-list</code>
      </p>
      <p>
        Build a simple select list of buttons and/or links.
      </p>
      <Preview
        example={<SelectListExample />}
        raw={selectListExampleRaw}
      />

      <p>
        <code>.cf-list__divider</code>
      </p>
      <p>
        Divide items
      </p>
      <Preview
        example={<SelectListDivider/>}
        raw={selectListDividerRaw}
      />
    </div>
  );
}

const css = ``;