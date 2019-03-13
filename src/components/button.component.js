import React from 'react';
import { oneOf } from 'prop-types';

export function Button(props) {
  const { actionType, className, ...buttonProps } = props;
  return (
    <button
      className={`cf-btn cf-btn__${actionType} ${className}`}
      {...buttonProps}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  actionType: oneOf(['primary', 'secondary']),
};