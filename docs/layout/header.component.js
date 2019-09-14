import React, { Component } from 'react';
import { Scoped, k } from 'kremling';

import comfyCatImg from '../assets/comfy-cat.svg';
import comfyLogoImg from '../assets/comfy-logo.svg';

export class Header extends Component {
  render() {
    return (
      <Scoped css={css}>
        <div className="header">
          <div className="header__brand">
            <div
              className="comfy-logo"
              dangerouslySetInnerHTML={{ __html: comfyLogoImg }}
            />
            <div
              className="comfy-cat-img"
              dangerouslySetInnerHTML={{ __html: comfyCatImg }}
            />
          </div>
        </div>
      </Scoped>
    );
  }
}

const css = k`
  .header {
    height: 7rem;
    padding: 0 3.2rem;
    background-color: var(--color-danger);
  }
  
  .header__brand {
    display: flex;
    height: 7rem;
    align-items: center;
  }
  
  .comfy-logo {
    width: 8rem;
    fill: #fff;
    transform: translateY(.2rem);
  }
  
  .comfy-cat-img {
    width: 12rem;
    height: auto;
    transform: translate(2.6rem, 2.32rem);
  }
`;
