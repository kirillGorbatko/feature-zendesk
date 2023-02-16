/* eslint-disable-next-line */
import React from 'react';

export interface CheckmarkProps {
  fill?: 'primary' | 'secondary' | 'grey' | 'tertiary';
  positive?: boolean;
}

const translateFill = (fill: string | undefined) => {
  switch (fill) {
    case 'secondary':
      return '#FF5262';
    case 'tertiary':
      return '#58ECCA';
    case 'grey':
      return '#959595';
    default:
      return '#9B62FF';
  }
};

export function Checkmark(props: CheckmarkProps) {
  return props.positive ? (
    <svg
      width="19px"
      height="15px"
      viewBox="0 0 19 15"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="square"
      >
        <g
          transform="translate(-673.000000, -1329.000000)"
          stroke={translateFill(props.fill)}
          strokeWidth="2"
        >
          <g transform="translate(322.000000, 1306.000000)">
            <polyline
              id="Line-14-Copy-16"
              points="353 32.3669725 356.784404 36 367.784404 25"
            ></polyline>
          </g>
        </g>
      </g>
    </svg>
  ) : (
    <svg
      width="12px"
      height="12px"
      viewBox="0 0 12 12"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Group 58@3x</title>
      <g
        id="V2"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="square"
      >
        <g
          id="Mobile-Pricing---Full-"
          transform="translate(-300.000000, -2486.000000)"
          stroke={translateFill(props.fill)}
          strokeWidth="2"
        >
          <g id="Group-28" transform="translate(0.000000, 378.000000)">
            <g id="Group-19" transform="translate(30.000000, 1129.000000)">
              <g id="Group-11" transform="translate(0.000000, 200.000000)">
                <g id="Group-58" transform="translate(272.000000, 781.000000)">
                  <line
                    x1="0.285714286"
                    y1="0.285714286"
                    x2="7.71428571"
                    y2="7.71428571"
                    id="Line-18"
                  ></line>
                  <line
                    x1="0.285714286"
                    y1="0.285714286"
                    x2="7.71428571"
                    y2="7.71428571"
                    id="Line-18-Copy"
                    transform="translate(4.000000, 4.000000) scale(-1, 1) translate(-4.000000, -4.000000) "
                  ></line>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Checkmark;
