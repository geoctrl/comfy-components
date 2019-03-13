import React from 'react';
import { node, string } from 'prop-types';
import { useCss } from 'kremling';

import { Pre } from './pre.component';

export function Preview(props) {
  const { example, raw } = props;
  const scope = useCss(css);
  const pre = <Pre>{raw}</Pre>;
  return (
    <div {...scope} className="doc-preview">
      <div className="doc-preview__example">
        <div className="cf-card bs-1">
          {example}
        </div>
      </div>
      <div className="doc-preview__raw">
        {pre}
      </div>
    </div>
  );
}

Preview.propTypes = {
  example: node.isRequired,
  raw: string.isRequired,
};

const css = `
  & .doc-preview {
    display: flex;
    width: 100%;
    margin-bottom: 3.2rem;
  }
  
  & .doc-preview > * {
    flex-grow: 1;
    width: 100%;
  }
  
  & .doc-preview > .doc-preview__raw {
    margin-left: 1.6rem;
  }
`;