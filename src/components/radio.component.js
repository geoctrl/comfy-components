import React, { useState } from 'react';
import { a } from 'kremling';
import { bool, func, string } from 'prop-types';

export function Radio(props) {
  const { onChange, value, name, children, checked, block } = props;
  const [isFocused, updateIsFocused] = useState(false);

  return (
  <label
    className={
      a('comfy-radio')
        .m('comfy-radio--focus', isFocused)
        .m('comfy-radio--checked', checked)
        .m('comfy-radio--block', block)
    }
  >
    <input
      type="radio"
      name={name}
      onChange={onChange}
      onFocus={() => updateIsFocused(true)}
      onBlur={() => updateIsFocused(false)}
      value={value}
    />
    {children}
  </label>
  );
}

Radio.propTypes = {
  value: string.isRequired,
  name: string.isRequired,
  checked: bool.isRequired,
  onChange: func.isRequired,
  block: bool,
};