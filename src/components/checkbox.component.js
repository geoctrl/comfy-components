import React, { Component } from 'react';
import { Scoped, k, a } from 'kremling';
import { bool, func, string, number } from 'prop-types';

export class Checkbox extends Component {
  static propTypes = {
    checked: bool,
    onChange: func,
    block: bool,

    // other attributes
    autoComplete: string,
    autoFocus: bool,
    disabled: bool,
    form: string,
    name: string,
    list: string,
    readOnly: bool,
    required: bool,
    tabIndex: number,
    type: string,
  };

  state = {
    isFocused: false,
  }
  render() {
    const { checked, onChange, block, children, ...checkboxAttrs } = this.props;
    const { isFocused } = this.state;
    return (
      <Scoped css={css}>
        <label
          className={
            a('checkbox')
              .m('checkbox--focus', isFocused)
              .m('checkbox--checked', checked)
              .m('checkbox--block', block)
          }
        >
          <span className="checkbox__box" />
          <input
            type="checkbox"
            onChange={onChange}
            {...checkboxAttrs}
            onFocus={() => this.setState({ isFocused: true })}
            onBlur={() => this.setState({ isFocused: false })}
          />
          {children}
        </label>
      </Scoped>
    );
  }
}

const css = k`
  .checkbox {
    display: inline-flex;
    align-items: center;
    padding-right: 16rem;
    user-select: none;
    vertical-align: middle;

    .checkbox__box {
      display: inline-block;
      height: var(--checkbox-size);
      width: var(--checkbox-size);
      position: relative;
      margin-right: 6rem;
      border-radius: $base-border-radius;
      box-shadow: none;
      transition: box-shadow $base-form-transition-duration ease, border $base-form-transition-duration ease;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: $base-border-radius;
        border: solid 2rem var(--color-grey-300);
        transition: border $base-form-transition-duration ease;
      }
    }

    &.checkbox--focus .checkbox__box::before {
      border-color: var(--color-grey-500);
    }

    &.checkbox--checked .checkbox__box {
      &::before {
        border-width: 5rem;
        border-color: var(--color-primary);
      }
    }

    &.checkbox--focus {
      .checkbox__box {
        box-shadow: var(--input-focus-box-shadow);
      }
    }

    &.checkbox--block {
      display: flex;
    }

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
  }
`;