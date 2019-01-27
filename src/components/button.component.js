import React from 'react';
import { oneOf } from 'prop-types';

export function Button(props) {
  return (
    <button
      className={`comfy-btn comfy-btn__${props.actionType}`}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  actionType: oneOf(['primary', 'secondary']),
};