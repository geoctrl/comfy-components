import React from 'react';
import { Scoped } from 'kremling';

import comfyCatImg from '../assets/comfy-cat.svg';
import comfyLogoImg from '../assets/comfy-logo.svg';

export function Header() {
  return (
    <Scoped css={css} namespace="header">
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

const css = `
  & .header {
    height: 7rem;
    padding: 0 3.2rem;
    background-color: var(--color-theme);
  }
  
  & .header__brand {
    display: flex;
    height: 7rem;
    align-items: center;
  }
  
  & .comfy-logo {
    width: 8rem;
    fill: #fff;
    transform: translateY(.2rem);
  }
  
  & .comfy-cat-img {
    width: 12rem;
    height: auto;
    transform: translate(2.6rem, 2.32rem);
  }
`;