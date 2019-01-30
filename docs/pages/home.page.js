import React from 'react';
import { Scoped } from 'kremling';

import comfyCatImg from '../assets/comfy-cat.svg';
import comfyLogoImg from '../assets/comfy-logo.svg';

export function HomePage() {
  return (
    <Scoped css={css}>
      <div className="wrapper">
        home page
      </div>
    </Scoped>
  );
}

HomePage.propTypes = {};

const css = `
  & .wrapper {
    background-color: var(--color-danger);
  }
`;