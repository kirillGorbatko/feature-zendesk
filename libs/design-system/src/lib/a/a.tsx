import React from 'react';

export interface AProps {
  type: 'default' | 'footer-link';
  href: string;
  children: React.ReactNode;
  target: '_blank' | '_self' | '_parent' | '_top';
}

A.defaultProps = {
  type: 'default',
  href: '#',
  target: '_self',
};

export function A(props: AProps) {
  let color = '#000000';
  switch (props.type) {
    case 'footer-link':
      color = '#737373';
      break;
  }

  return (
    <a href={props.href} target={props.target}>
      <style jsx>{`
        a {
          opacity: 1;
          color: ${color};
          font-weight: 300;
          letter-spacing: 0px;
        }
      `}</style>
      {props.children}
    </a>
  );
}

export default A;
