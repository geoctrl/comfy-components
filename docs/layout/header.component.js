import React from 'react';
import { Scoped } from 'kremling';

import comfyCatImg from '../assets/comfy-cat.png';

export function Header() {
  return (
    <Scoped css={css} namespace="header">
      <div className="header">
        <div className="header__brand">
          <div>Comfy</div>
          <img className="comfy-cat-img" src={comfyCatImg} />
        </div>
      </div>
    </Scoped>
  );
}

const css = `
  & .header {
    height: 7rem;
    padding: 0 3.2rem;
    background-color: var(--color-primary);
  }
  & .header__brand {
    display: flex;
    align-items: center;
    font-family: 'Chewy';
    font-size: 3rem;
    user-select: none;
    color: #fff;
    text-shadow: 0 .2rem .1rem rgba(0,0,0,.3);
  }
  & .comfy-cat-img {
    transform: translate(1.6rem, 2.4rem);
    width: 11.8rem;
    height: 7rem;
  }
`;