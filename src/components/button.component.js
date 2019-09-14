import React, { Component } from 'react';
import { a } from 'kremling';
import { oneOf, bool, string, func, oneOfType, number, object } from 'prop-types';

import { Icon } from './icon.component';

export class Button extends Component {
  static propTypes = {
    action: oneOf(['primary', 'grey', 'flat']),
    block: bool,
    circle: bool,
    className: oneOfType([string, object]),
    dropdown: bool,
    icon: string,
    large: bool,
    onClick: func,
    square: bool,
    small: bool,
    tag: string,

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
    tabIndex: number,
    type: oneOf(['submit', 'reset', 'button']),
    value: string,
  };

  static defaultProps = {
    action: 'grey',
    icon: '',
  };

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
    const {
      action,
      icon,
      children,
      block,
      small,
      large,
      className,
      dropdown,
      circle,
      square,
      tabIndex,
      ...buttonProps
    } = this.props;
    const { isFocused } = this.state;
    return (
      <button
        tabIndex={tabIndex || 0}
        style={{ zIndex: isFocused ? 1 : 0 }}
        {...buttonProps}
        className={a(`button button--${action} ${className || ""}`)
          .m("button--icon", icon)
          .m("button--block", block)
          .m("button--small", small)
          .m("button--large", large)
          .m("button--dropdown", dropdown)
          .m("button--circle", circle)
          .m("button--square", square)}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      >
        {icon ? (
          <span className="inner-icon">
            <Icon name={icon} size={small ? 16 : large ? 24 : 20} />
          </span>
        ) : (
          <span className="inner-content">{children}</span>
        )}
        {dropdown && (
          <div className="button-dropdown-icon">
            <Icon name="caret-down" size={13} />
          </div>
        )}
      </button>
    );
  }}