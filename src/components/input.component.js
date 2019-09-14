import React, { Component } from 'react';
import { Scoped, k, a } from 'kremling';

export class Input extends Component {
  state = {
    isFocused: false,
  }
  onFocus = () => {
    this.setState({ isFocused: true });
  }
  onBlur = () => {
    this.setState({ isFocused: false });
  }
  render() {
    const { isFocused} = this.state;
    return (
      <Scoped css={css}>
        <div
          style={{ zIndex: isFocused ? 1 : 0 }}
          className={
            a('input')
              .m('input--focus', isFocused)
          }
        >
          <input
            type="text"
            className="input__input"
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        </div>
      </Scoped>
    );
  }
}

const css = k`
  .input {
    display: block;
    border-radius: $base-border-radius;
    flex-grow: 1;

    &.input--focus {
    }
  }

  .input__input {
    height: 3rem;
    line-height: 3rem;
    border-radius: $base-border-radius;
    font-size: $base-font-size;
    color: $color-grey-900;
    border: solid .1rem $color-grey-100;
    padding: 0 .8rem;
    font-family: $base-font-family;
    width: 100%;
    display: block;
    box-shadow: none;
    transition: box-shadow $base-transition-duration ease, border $base-transition-duration ease;

    &:focus, &:active {
      box-shadow: none;
      outline: none;
    }

    &:focus {
      @include focus-box-shadow();
    }
  }
`;