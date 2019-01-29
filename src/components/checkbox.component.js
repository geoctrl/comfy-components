import React, { useState } from 'react';
import { a } from 'kremling';
import { bool, func, string } from 'prop-types';

import { Icon } from './icon.component';

export function Checkbox(props) {
  const [isFocused, updateIsFocused] = useState(false);
  const { onChange, value, name, children, checked, block } = props;

  return (
  <label
    className={
      a('comfy-checkbox')
        .m('comfy-checkbox--focus', isFocused)
        .m('comfy-checkbox--checked', checked)
        .m('comfy-checkbox--block', block)
    }
  >
    <span className="comfy-checkbox__box" />
    <input
      type="checkbox"
      name={name}
      onChange={onChange}
      value={value}
      onFocus={() => updateIsFocused(true)}
      onBlur={() => updateIsFocused(false)}
    />
    {children}
  </label>
  );
}

Checkbox.propTypes = {
  // value: string.isRequired,
  name: string,
  checked: bool.isRequired,
  onChange: func.isRequired,
  block: bool,
};