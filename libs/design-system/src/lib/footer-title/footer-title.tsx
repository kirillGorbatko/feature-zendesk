import React from 'react';

export interface FooterTitleProps {
  text: string;
}

export function FooterTitle(props: FooterTitleProps) {
  return (
    <div>
      {props.text}
      <style jsx>
        {`
          div {
            opacity: 1;
            font-size: 16px;
            font-weight: 500;
            font-style: normal;
            letter-spacing: 0px;
            text-align: left;
          }
        `}
      </style>
    </div>
  );
}

export default FooterTitle;
