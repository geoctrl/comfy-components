import React, { useRef } from 'react';
import { a } from 'kremling';
import { bool, func, string } from 'prop-types';

export function Checkbox(props) {
  const { onChange, value, name, children, checked, block } = props;
  const inputEl = useRef(null);

  return (
  <label
    className={
      a('comfy-checkbox')
        .m('comfy-checkbox--checked', checked)
        .m('comfy-checkbox--block', block)
    }
  >
    <span className="comfy-checkbox__check" />
    <input
      ref={inputEl}
      type="checkbox"
      name={name}
      onChange={onChange}
      value={value}
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