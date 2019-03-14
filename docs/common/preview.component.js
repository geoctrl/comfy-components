import React from 'react';
import { node, string } from 'prop-types';
import { useCss } from 'kremling';

import { Pre } from './pre.component';

export function Preview(props) {
  const { title, example, raw, children } = props;
  const scope = useCss(css);
  const pre = <Pre>{raw}</Pre>;
  return (
    <div {...scope} className="preview-wrapper">
      <div className="preview-wrapper__example">
        <h5><code>{title}</code></h5>
        {children}
        <div className="cf-card bs-1 p-md">
          {example}
        </div>
      </div>
      <div className="preview-wrapper__raw">
        <div className="cf-card">
          {pre}
        </div>
      </div>
    </div>
  );
}

Preview.propTypes = {
  example: node.isRequired,
  raw: string.isRequired,
};

const css = `
  & .preview-wrapper {
    width: 100%;
    margin-bottom: 2.4rem;
  }
  
  & .preview-wrapper__raw > div {
    overflow: hidden;
  }
  
  & .preview-wrapper__example {
    margin-bottom: 1.6rem;
  }
      
  & .preview-wrapper > * {
    flex-grow: 1;
    width: 100%;
  }
    
  @media (min-width: 1200px) {
    & .preview-wrapper {
      display: flex;    
    }
    
    & .preview-wrapper__example {
      margin-bottom: 0;
    }
    
    & .preview-wrapper > .preview-wrapper__raw {
      margin-left: 1.6rem;
    }
  }
  
`;