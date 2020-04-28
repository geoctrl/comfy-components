import React, { Component } from 'react';
import { Scoped, k } from 'kremling';

import comfyCatImg from '../assets/comfy-cat.svg';
import comfyLogoImg from '../assets/comfy-logo.svg';
import { Modal } from '../../src/components/modal.component';
import { Button } from '../../src';
import { InputButtonGroup } from '../../src/components/input-button-group.component';
import { Dropdown } from '../../src/components/dropdown.component';

export class HomePage extends Component {
  state = {
    delete: false,
  }
  render() {
    return (
      <Scoped css={css}>
        <div>
          Home page
        </div>
      </Scoped>
    );
  }
}

const css = k``;
