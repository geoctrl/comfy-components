import React, { Component } from 'react';
import { Scoped, k, a } from 'kremling';
import { bool, func, number, string } from 'prop-types';

export class Radio extends Component {
  static propTypes = {
    value: string.isRequired,
    name: string.isRequired,
    checked: bool.isRequired,
    onChange: func.isRequired,
    block: bool,

    // other attributes
    autoComplete: string,
    autoFocus: bool,
    disabled: bool,
    form: string,
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
    const { onChange, value, name, children, checked, block } = this.props;
    const { isFocused } = this.state;
    return (
      <Scoped css={css}>
        <label
          className={
            a('radio')
              .m('radio--focus', isFocused)
              .m('radio--checked', checked)
              .m('radio--block', block)
          }
        >
          <input
            type="radio"
            name={name}
            onChange={onChange}
            onFocus={() => this.setState({ isFocused: true })}
            onBlur={() => this.setState({ isFocused: false })}
            value={value}
          />
          {children}
        </label>
      </Scoped>
    );
  }
}


const css = k`
.radio {
  display: inline-flex;
  align-items: center;
  padding-right: 1.4rem;
  user-select: none;
  vertical-align: middle;

  &::before {
    display: inline-block;
    content: '';
    height: 1.4rem;
    width: 1.4rem;
    border-radius: 1.4rem;
    border: solid .2rem $color-grey-300;
    margin-right: .6rem;
    box-shadow: none;
    transition: border $base-transition-duration ease, box-shadow $base-transition-duration ease;
  }

  &.radio--focus::before {
    @include focus-box-shadow;
  }

  &.radio--checked::before {
    border: solid .5rem $color-primary;
  }

  &.radio--block {
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