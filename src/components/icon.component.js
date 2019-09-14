import React, { Component } from 'react';
import { string, number } from 'prop-types';
import { Scoped, k } from 'kremling';

export class Icon extends Component {
  static propTypes = {
    name: string,
    size: number,
    className: string,
  };

  render() {
    const { name, size = 20, className } = this.props;
    return (
      <Scoped css={css}>
        <svg
          className={`icon ${className || ''}`}
          style={{ width: `${size / 10}rem`, height: `${size / 10}rem` }}
        >
          <use href={`#${name}`} xlinkHref={`#${name}`} />
        </svg>
      </Scoped>
    );
  }
}

const css = k``;