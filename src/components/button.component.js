import React from 'react';
import { a } from 'kremling';
import { oneOf, bool } from 'prop-types';

export function Button(props) {
  const { actionType, className = '', small, ...buttonProps } = props;
  return (
    <button
      className={
        a(`cf-btn cf-btn__${actionType} ${className}`)
          .m('cf-btn--small', small)
      }
      {...buttonProps}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  actionType: oneOf(['primary', 'secondary']),
  small: bool,
};