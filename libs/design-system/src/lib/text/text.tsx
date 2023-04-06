/* eslint-disable-next-line */
import React, { createElement } from 'react';
import { H1, H2, Span, Div, H3, H4, H5, P } from '@featurefm/design-system';

export interface TextInlineProps {
  desktop: string;
  tablet?: string;
  mobile?: string;
}

export interface TextProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div' | 'span' | 'p';
  text: TextInlineProps;
  className?: string;
}

Text.defaultProps = {
  as: 'div',
  className: '',
};

export function Text(props: TextProps) {
  const desktop = props.text.desktop.split('<br/>');
  const tablet = props.text.tablet && props.text.tablet.split('<br/>');
  const mobile = props.text.mobile && props.text.mobile.split('<br/>');

  const Components = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    div: Div,
    span: Span,
    p: P,
  };

  const component = (
    <div>
      {desktop.map((text, index) =>
        createElement(
          Components[props.as],
          { className: 'hidden desktop:block', key: index },
          text
        )
      )}
      {(tablet || desktop).map((text, index) =>
        createElement(
          Components[props.as],
          { className: 'hidden tablet:block desktop:hidden', key: index },
          text
        )
      )}
      {(mobile || desktop).map((text, index) =>
        createElement(
          Components[props.as],
          { className: 'block tablet:hidden', key: index },
          text
        )
      )}
    </div>
  );

  if (props.className) {
    return <div className={props.className}>{component}</div>;
  }

  return component;
}

export default Text;
