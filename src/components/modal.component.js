import React, { Component, createRef } from 'react';
import { func, bool, string, oneOf } from 'prop-types';
import { createPortal } from 'react-dom';
import { Scoped, a, k } from 'kremling';

import { Button } from './button.component';
const bodyClass = '__modal-hide-scroll';

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalEl = createRef();
  }
  static propTypes = {
    isOpen: bool,
    title: string,
    allowBackdropClick: bool,
    onClose: func,
    size: oneOf(['sm', 'md', 'lg', 'xl']),
    closeBtn: bool,
    type: oneOf(['dialog', 'scroll', 'overlay'])
  };
  static defaultProps = {
    isOpen: true,
    closeBtn: true,
    size: 'md',
    type: 'dialog',
  };
  componentDidUpdate(prevProps) {
    const { isOpen } = this.props;
    if (!prevProps.isOpen && isOpen) {
      this.bodyScroll(true);
      if (this.modalEl && this.modalEl.current) {
        this.modalEl.current.focus();
      }
    } else if (prevProps.isOpen && !isOpen) {
      this.bodyScroll(false);
    }
  }

  componentWillUnmount() {
    this.bodyScroll(false);
  }

  bodyScroll = (show) => {
    document.body.classList[show ? 'add' : 'remove'](bodyClass);
  }

  closeBackdrop = (e) => {
    const { allowBackdropClick, onClose } = this.props;
    if (allowBackdropClick) {
      return onClose(e);
    }
  }

  render() {
    const {
      allowBackdropClick,
      children,
      isOpen,
      title,
      onClose,
      size,
      closeBtn,
      type
    } = this.props;
    if (!isOpen) return null;
    return createPortal(
      <>
        <div className="modal-backdrop" />
        <div
          tabIndex={0}
          ref={this.modalEl}
          className={
            a('modal')
              .m('modal--scroll', type === 'scroll')
              .m('modal--overlay', type === 'overlay')
          }
          onClick={this.closeBackdrop}
        >
          <div
            className={`modal__inner modal--${size}`}
            onClick={e => e.stopPropagation()}
          >
            {closeBtn && (
              <Button
                className="modal__head-close"
                action="flat"
                icon="times"
                onClick={onClose}
              />
            )}
            {title && <div className="modal__title">{title}</div>}

            {children}
          </div>
        </div>
      </>
      ,document.body
    );
  }
}