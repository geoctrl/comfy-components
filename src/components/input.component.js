import React, { useState } from 'react';
import { a } from 'kremling';

export function Input() {
  const [isFocused, updateIsFocused] = useState(false);
  function onFocus() {
    updateIsFocused(true);
  }
  function onBlur() {
    updateIsFocused(false);
  }
  return (
  <div
    className={
      a('comfy-input')
        .m('comfy-input--focus', isFocused)
    }
  >
    <input
      type="text"
      className="comfy-input__input"
      onFocus={onFocus}
      onBlur={onBlur}
    />
  </div>
  );
}

Input.propTypes = {};