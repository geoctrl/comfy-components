import React, { useState } from 'react';
import { always } from 'kremling/src/classname-helpers';
import { bool, func, string } from 'prop-types';

export function Checkbox(props) {
  const [isFocused, updateIsFocused] = useState(false);
  const { onChange, value, name, children, checked, block } = props;

  return (
  <label
    className={
      always('comfy-checkbox')
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