import React, { Component } from 'react';
import { node, string } from 'prop-types';
import { Scoped, k } from 'kremling';

import { Pre } from './pre.component';

export class Preview extends Component {
  static propTypes = {
    title: string.isRequired,
    example: node.isRequired,
    raw: string.isRequired,
  };

  render() {
    const { title, example, raw, children } = this.props;
    const pre = <Pre>{raw}</Pre>;
    return (
      <Scoped css={css}>
        <h5><code>{title}</code></h5>
        {children}
        <div className="preview-wrapper">
          <div className="preview-wrapper__example">
            {example}
          </div>
          <div className="preview-wrapper__raw">
            <div className="card">
              {pre}
            </div>
          </div>
        </div>
      </Scoped>
    );
  }
}

const css = k`
  .preview-wrapper {
    width: 100%;
    margin-bottom: 2.4rem;
  }
  
  .preview-wrapper__raw > div {
    overflow: hidden;
  }
  
  .preview-wrapper__example {
    margin-bottom: 1.6rem;
  }
      
  .preview-wrapper > * {
    flex-grow: 1;
    width: 100%;
  }
    
  @media (min-width: 1000px) {
    .preview-wrapper {
      display: flex;    
    }
    
    .preview-wrapper__example {
      margin-bottom: 0;
    }
    
    .preview-wrapper > .preview-wrapper__raw {
      margin-left: 1.6rem;
    }
  }
  
`;