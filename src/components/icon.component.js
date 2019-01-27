import React from 'react';
import { string, number } from 'prop-types';

export function Icon(props) {
  const { name, size = 20, className } = props;
  return (
    <svg
      className={`icon ${className || ''}`}
      style={{ width: `${size / 10}rem`, height: `${size / 10}rem` }}
    >
      <use href={`#${name}`} xlinkHref={`#${name}`} />
    </svg>
  );
}

Icon.propTypes = {
  name: string,
  size: number,
  className: string,
};
