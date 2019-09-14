import React, { Component } from 'react';
import { Scoped, k } from 'kremling';

import comfyCatImg from '../assets/comfy-cat.svg';
import comfyLogoImg from '../assets/comfy-logo.svg';

export class HomePage extends Component {
  render() {
    return (
      <Scoped css={css}>
        <div className="wrapper">
          home page
        </div>
      </Scoped>
    );
  }
}

const css = k``;
