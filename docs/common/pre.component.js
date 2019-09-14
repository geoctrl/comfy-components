import React, { Component, createRef } from 'react';
import { string } from 'prop-types';
import { Scoped, k } from 'kremling';
import Prism from 'prismjs';

export class Pre extends Component {
  constructor(props) {
    super(props);
    this.preEl = createRef();
  }
  static propTypes = {
    children: string,
  };

  state = {
    content: Prism.highlight(this.props.children, Prism.languages.javascript, 'javascript'),
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { content, children } = this.props;
    if (prevProps.content !== content) {
      this.setState({
        content: Prism.highlight(children, Prism.languages.javascript, 'javascript'),
      });
    }
  }

  render() {
    return (
      <Scoped css={css}>
        <pre
          className="comfy-pre"
          ref={this.preEl}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Scoped>
    );
  }
}

const css = k`
  .comfy-pre {
    margin: 0;
    padding: 1.6rem;
    font-size: 1.2rem;
    background-color: #445671;
    color: #fff;
  }
`;