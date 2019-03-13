import React, { useEffect, useState, useRef } from 'react';
import { string } from 'prop-types';
import { useCss } from 'kremling';
import Prism from 'prismjs';

export function Pre(props) {
  const { children } = props;
  const [content, updateContent] = useState(Prism.highlight(children, Prism.languages.javascript, 'javascript'))
  const preEl = useRef(null);
  const scope = useCss(css);
  useEffect(
    () => updateContent(Prism.highlight(children, Prism.languages.javascript, 'javascript')),
    ['content']
  );
  return (
    <pre
      className="comfy-pre bs-1"
      {...scope}
      ref={preEl}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

Pre.propTypes = {
  children: string,
};

const css = `
  & .comfy-pre {
    border-radius: .8rem;
    margin: 0;
    padding: 1.6rem;
    font-size: 1.2rem;
    background-color: #445671;
    color: #fff;
  }
`;