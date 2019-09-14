import React, { Component } from 'react';
import { Scoped, k } from 'kremling';
import { Radio } from "../../../src/components/radio.component";
import { Checkbox } from "../../../src/components/checkbox.component";
import { Input } from "../../../src/components/input.component";
import { Button } from "../../../src/components/button.component";

export class Forms extends Component {
  state = {
    name1: '',
    firstName: true,
    lastName: false,
    phone: false,
  };

  update = (key, val) => {
    this.setState({ [key]: val });
  }

  render() {
    const { name1, firstName, lastName, phone } = this.state;
    return (
      <Scoped css={css}>
        <div>
          <h1>Radios</h1>
          <h3>Inline</h3>
          <Radio
            onChange={(e) => this.update('name1', e.target.value)}
            value="Jim"
            checked={name1 === 'Jim'}
            name="name-1"
          >
            Jim
          </Radio>
          <Radio
            onChange={(e) => this.update('name1', e.target.value)}
            value="Bobby"
            checked={name1 === 'Bobby'}
            name="name-1"
          >
            Bobby
          </Radio>
          <Radio
            onChange={(e) => this.update('name1', e.target.value)}
            value="Fred"
            checked={name1 === 'Fred'}
            name="name-1"
          >
            Fred
          </Radio>

          <h1>Checkbox</h1>
          <h3>Inline</h3>
          <Checkbox
            onChange={() => this.update('firstName', !firstName)}
            checked={firstName}
          >
            First Name
          </Checkbox>
          <Checkbox
            onChange={() => this.update('lastName', !lastName)}
            checked={lastName}
          >
            Last Name
          </Checkbox>
          <Checkbox
            onChange={() => this.update('phone', !phone)}
            checked={phone}
          >
            Phone
          </Checkbox>
          <h3>Block</h3>
          <Checkbox
            onChange={() => this.update('firstName', !firstName)}
            checked={firstName}
            block
          >
            First Name
          </Checkbox>
          <Checkbox
            onChange={() => this.update('lastName', !lastName)}
            checked={lastName}
            block
          >
            Last Name
          </Checkbox>
          <Checkbox
            onChange={() => this.update('phone', !phone)}
            checked={phone}
            block
          >
            Phone
          </Checkbox>
          <h1>Input</h1>
          <h3>Single</h3>
          <Input />
          <Button action="primary">Test</Button>
        </div>
      </Scoped>
    );
  }
}

Forms.propTypes = {};

const css = k`
  .thing {}
`;
