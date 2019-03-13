import React, { useState } from 'react';
import { always } from 'kremling/src/classname-helpers';
import { bool, func, string } from 'prop-types';

export function Checkbox(props) {
  const [isFocused, updateIsFocused] = useState(false);
  const { onChange, value, name, children, checked, block } = props;

  return (
  <label
    className={
      always('cf-checkbox')
        .m('cf-checkbox--focus', isFocused)
        .m('cf-checkbox--checked', checked)
        .m('cf-checkbox--block', block)
    }
  >
    <span className="cf-checkbox__box" />
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