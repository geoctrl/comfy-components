import React, { Component } from 'react';
import { Scoped, k } from 'kremling';

import comfyCatImg from '../assets/comfy-cat.svg';
import comfyLogoImg from '../assets/comfy-logo.svg';
import { Modal } from '../../src/components/modal.component';
import { Button, Input } from '../../src';
import { InputButtonGroup } from '../../src/components/input-button-group.component';
import { Dropdown } from '../../src/components/dropdown.component';

export class HomePage extends Component {
  state = {
    delete: false,
  }
  render() {
    return (
      <Scoped css={css}>
        <div className="wrapper">
          <InputButtonGroup>
            <Input />
            <Dropdown
              lean="left"
              trigger={() => (
                <Button action="primary" dropdown>Yummy</Button>
              )}
              content={() => (
                <div className="select-list">
                  <Button>stuff</Button>
                  <Button>more stuff</Button>
                  <div className="select-list__divider" />
                  <Button>Delete</Button>
                </div>
              )}
            />
          </InputButtonGroup>
        </div>
      </Scoped>
    );
  }
}

const css = k``;
