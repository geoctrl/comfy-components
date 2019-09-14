import React, { Component } from 'react';
import { Scoped, k, a } from 'kremling';
import { oneOf, bool, string } from 'prop-types';

export class Button extends Component {
  static propTypes = {
    action: oneOf(['primary', 'secondary', 'flat']),
    small: bool,

    // other attributes
    autoFocus: bool,
    disabled: bool,
    form: string,
    formAction: string,
    formEncType: oneOf(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']),
    formMethod: oneOf(['post', 'get']),
    formNoValidate: bool,
    formTarget: oneOf(['_self', '_blank', '_parent', '_top']),
    name: string,
    type: oneOf(['submit', 'reset', 'button']),
    value: string,
  };

  render() {
    const {
      children,
      action = 'secondary',
      className = '',
      small = false,
      ...buttonProps
    } = this.props;

    return (
      <Scoped css={css}>
        <button
          className={
            a(`button button__${action} ${className}`)
              .m('button--small', small)
          }
          {...buttonProps}
        >
          {children}
        </button>
      </Scoped>
    );
  }
}

const css = k`
  .button {
    position: relative;
    height: 3.2rem;
    border: none;
    border-radius: $base-border-radius;
    padding: 0 .8rem;
    line-height: 1;
    background: transparent;
    transition: background $base-transition-duration ease;
    font-weight: 500;
    font-size: $base-font-size;

    &::after {
      content: '';
      position: absolute;
      border-radius: $base-border-radius;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: solid .1rem;
      background-color: transparent;
      box-shadow: none;
      transition: background-color $base-transition-duration ease, box-shadow $base-transition-duration ease;
    }

    &::before {
      content: '';
      position: absolute;
      border-radius: $base-border-radius;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: none;
      transition: box-shadow $base-transition-duration ease;
    }

    &:focus::before {
      @include focus-box-shadow();
    }

    &:focus,
    &:active {
      outline: none;
      box-shadow: none;
    }

    &:focus:active::before {
      box-shadow: none;
    }

    &:active::after {
      box-shadow: inset 0 .1rem .2rem .1rem rgba($color-grey-900, .4);
      background-color: rgba($color-grey-900, .1);
    }
  }

  .button--small {
    height: 2.8rem;
    line-height: 2.8rem;
    padding: 0 .8rem;
    font-size: 1.4rem;
  }


  /**
   * PRIMARY
   */
  .button__primary {
    background-color: $color-primary;
    color: #fff;

    &::after {
      border-color: rgba($color-grey-900, .2);
    }

    &:hover {
      background-color: darken($color-primary, 10%);
    }
  }

  /**
   * SECONDARY
   */
  .button__secondary {
    background-color: $color-grey-25;
    color: $color-grey-500;

    &::after {
      border-color: $color-grey-100;
    }

    &:focus::after {
      border-color: $color-grey-300;
    }

    &:hover {
      background-color: $color-grey-50;
    }
  }

  /**
   * FLAT
   */
  .button__flat {
    background-color: transparent;
    color: $color-grey-500;

    &::after {
      border: none;
    }

    &:hover {
      background-color: $color-grey-50;
    }
  }
`;