import React from 'react';
import { Scoped } from 'kremling';

export function HomePage() {
  return (
    <Scoped css={css}>
      <div className="wrapper">
        home page
      </div>
    </Scoped>
  );
}

HomePage.propTypes = {};

const css = `
  & .wrapper {
    background-color: var(--color-primary);
  }
`;