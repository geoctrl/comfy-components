import React, { Component } from 'react';
import { string, number, object, oneOfType } from 'prop-types';

export class Icon extends Component {
  static propTypes = {
    name: string,
    size: number,
    className: oneOfType([string, object]),
    fill: string,
  };
  render() {
    const { name, size = 20, fill, className } = this.props;
    return (
      <svg
        className={`icon ${className || ''}`}
        style={{ width: `${size / 10}rem`, height: `${size / 10}rem`, fill }}
      >
        <use href={`#${name}`} xlinkHref={`#${name}`} />
      </svg>
    );
  }
}
