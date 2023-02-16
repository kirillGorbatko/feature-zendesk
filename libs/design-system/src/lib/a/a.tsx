import React from 'react';

export interface AProps {
  type: 'default' | 'footer-link';
  href: string;
  children: React.ReactNode;
}

A.defaultProps = {
  type: 'default',
  href: '#',
};

export function A(props: AProps) {
  let color = '#000000';
  switch (props.type) {
    case 'footer-link':
      color = '#737373';
      break;
  }

  return (
    <a href={props.href}>
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
