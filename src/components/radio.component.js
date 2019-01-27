import React, { useRef } from 'react';
import { a } from 'kremling';
import { bool, func, string } from 'prop-types';

export function Radio(props) {
  const { onChange, value, name, children, checked, block } = props;
  const inputEl = useRef(null);

  return (
  <label
    className={
      a('comfy-radio')
        .m('comfy-radio--checked', checked)
        .m('comfy-radio--block', block)
    }
  >
    <input
      ref={inputEl}
      type="radio"
      name={name}
      onChange={onChange}
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