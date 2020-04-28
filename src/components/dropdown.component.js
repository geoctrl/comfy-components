import React, { Component, createRef } from "react";
import { createPortal } from "react-dom";
import { func, bool, string, number, oneOf, oneOfType, object } from "prop-types";
import { a } from "kremling";

export class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.dropdownEl = createRef();
    this.triggerEl = createRef();
    this.contentEl = createRef();
  }

  static propTypes = {
    allowContentClicks: bool,
    allowTriggerClose: bool,
    className: oneOfType([object, string]),
    content: func.isRequired,
    contentHeight: oneOfType([string, number]),
    control: func,
    cover: bool,
    fixedContent: bool,
    hideContent: bool,
    inline: bool,
    lean: oneOf(["right", "left"]),
    onClose: func,
    onOpen: func,
    size: oneOfType([number, oneOf(["sm", "md", "lg", "block"])]),
    trigger: func.isRequired,
  }

  static defaultProps = {
    allowTriggerClose: true,
    contentHeight: "auto",
    hideContent: false,
    lean: "right",
    size: "sm",
  }

  state = {
    isOpen: false,
    openAbove: false,
  }

  componentDidMount() {
    const { control } = this.props;
    if (control instanceof Function) {
      control({
        open: this.open,
        close: this.close,
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.documentClickHandler);
  }

  doesContain = (parent, child) => {
    if (!child || !child.classList) return false;
    if (child.classList.contains("dropdown-content")) return true;
    if (!child.parentNode && child.nodeName !== "#document") return true;
    return this.doesContain(parent, child.parentNode);
  }

  documentClickHandler = e => {
    if (!this.dropdownEl || !this.dropdownEl.current || !this.triggerEl.current) return;
    const contains =
      this.dropdownEl.current.contains(e.target) ||
      this.doesContain(this.dropdownEl.current, e.target);
    const isTrigger = this.triggerEl.current.contains(e.target);
    if (isTrigger && !this.props.allowTriggerClose) return;
    if ((contains && !this.props.allowContentClicks) || !contains) {
      this.close();
    }
  }

  toggle = e => {
    if (this.state.isOpen && this.props.allowTriggerClose) {
      this.close(e);
    } else if (!this.state.isOpen) {
      this.open(e);
    }
  }

  open = e => {
    if (e) e.stopPropagation();
    this.setState({ isOpen: true }, () => {
      const viewHeight = window.innerHeight;
      const rect = this.contentEl.current.getBoundingClientRect();
      this.setState({ openAbove: rect.top + rect.height > viewHeight });
    });
    document.addEventListener("click", this.documentClickHandler);
    if (this.props.onOpen) this.props.onOpen(e);
  }

  close = e => {
    if (e) e.stopPropagation();
    this.setState({ isOpen: false, openAbove: false });
    document.removeEventListener("click", this.documentClickHandler);
    if (this.props.onClose) this.props.onClose(e);
  }

  render() {
    const { trigger, inline, fixedContent, className, size } = this.props;
    const { isOpen } = this.state;
    return (
      <div
        className={
          a(`dropdown ${className || ''}`)
            .m('dropdown--block', size === 'block')
            .m("dropdown--inline", inline)
        }
        ref={this.dropdownEl}
      >
        <span
          ref={this.triggerEl}
          className={
            a('dropdown-trigger')
              .m('dropdown-trigger--block', size === 'block')
          }
          onClick={this.toggle}
        >
          {trigger({ isOpen })}
        </span>
        {fixedContent
          ? createPortal(this.renderContent(), document.body)
          : this.renderContent()}
      </div>
    );
  }

  renderContent = () => {
    const {
      content,
      lean,
      size,
      contentHeight,
      fixedContent,
      cover,
      hideContent,
    } = this.props;
    const { isOpen, openAbove } = this.state;
    let positionStyles = {};
    if (
      fixedContent &&
      this.dropdownEl &&
      this.dropdownEl.current &&
      this.contentEl &&
      this.contentEl.current
    ) {
      const dropdownRect = this.dropdownEl.current.getBoundingClientRect();
      const contentRect = this.contentEl.current.getBoundingClientRect();
      const viewWidth = window.innerWidth;
      if (lean === 'right') {
        positionStyles.left = dropdownRect.left;
      } else {
        positionStyles.right = viewWidth - dropdownRect.right;
      }
      if (openAbove) {
        positionStyles.top = cover
          ? dropdownRect.top + dropdownRect.height - contentRect.height
          : dropdownRect.top - contentRect.height;
      } else {
        positionStyles.top = cover
          ? dropdownRect.top
          : dropdownRect.top + dropdownRect.height;
      }
    }
    return (
      <div
        ref={this.contentEl}
        onClick={e => e.stopPropagation()}
        className={a("dropdown-content")
          .m("dropdown-content--fixed", fixedContent)
          .m("dropdown-content--hide", !isOpen || hideContent)
          .m("dropdown-content--above", !fixedContent && openAbove)
          .m("dropdown-content--cover", !fixedContent && cover)
          .m("dropdown-content--lean-right", lean === "right")
          .m("dropdown-content--lean-left", lean === "left")
          .m("dropdown-content--md", size === "md")
          .m("dropdown-content--lg", size === "lg")
          .m("dropdown-content--block", size === "block")}
        style={{
          maxHeight: contentHeight,
          ...(!isNaN(size) ? { width: `${size}rem` } : {}),
          ...positionStyles,
        }}
      >
        {content({ isOpen, close: this.close })}
      </div>
    );
  };
}