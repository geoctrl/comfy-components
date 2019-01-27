import React, { useState } from 'react';
import { Scoped } from 'kremling';
import { Radio } from "../../../src/components/radio.component";
import { Checkbox } from "../../../src/components/checkbox.component";

export function Forms() {
  const [name1, setName1] = useState('');
  const [firstName, setFirstName] = useState(false);
  const [lastName, setLastName] = useState(false);
  const [phone, setPhone] = useState(false);
  return (
    <Scoped css={css}>
      <div>
        <h1>Radios</h1>
        <h3>Inline</h3>
        <Radio
          onChange={(e) => setName1(e.target.value)}
          value="Jim"
          checked={name1 === 'Jim'}
          name="name-1"
        >
          Jim
        </Radio>
        <Radio
          onChange={(e) => setName1(e.target.value)}
          value="Bobby"
          checked={name1 === 'Bobby'}
          name="name-1"
        >
          Bobby
        </Radio>
        <Radio
          onChange={(e) => setName1(e.target.value)}
          value="Fred"
          checked={name1 === 'Fred'}
          name="name-1"
        >
          Fred
        </Radio>

        <h3>Block</h3>
        <Radio
          onChange={(e) => setName1(e.target.value)}
          value="Jim"
          checked={name1 === 'Jim'}
          name="name-2"
          block
        >
          Jim
        </Radio>
        <Radio
          onChange={(e) => setName1(e.target.value)}
          value="Bobby"
          checked={name1 === 'Bobby'}
          name="name-2"
          block
        >
          Bobby
        </Radio>
        <Radio
          onChange={(e) => setName1(e.target.value)}
          value="Fred"
          checked={name1 === 'Fred'}
          name="name-2"
          block
        >
          Fred
        </Radio>
        <h1>Checkbox</h1>
        <h3>Inline</h3>
        <Checkbox
          onChange={() => setFirstName(!firstName)}
          checked={firstName}
        >
          First Name
        </Checkbox>
        <Checkbox
          onChange={() => setLastName(!lastName)}
          checked={lastName}
        >
          Last Name
        </Checkbox>
        <Checkbox
          onChange={() => setPhone(!phone)}
          checked={phone}
        >
          Phone
        </Checkbox>
        <h3>Block</h3>
        <Checkbox
          onChange={() => setFirstName(!firstName)}
          checked={firstName}
          block
        >
          First Name
        </Checkbox>
        <Checkbox
          onChange={() => setLastName(!lastName)}
          checked={lastName}
          block
        >
          Last Name
        </Checkbox>
        <Checkbox
          onChange={() => setPhone(!phone)}
          checked={phone}
          block
        >
          Phone
        </Checkbox>
      </div>
    </Scoped>
  );
}

Forms.propTypes = {};

const css = `
  & .thing {}
`;