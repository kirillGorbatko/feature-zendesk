/* eslint-disable-next-line */
import classnames from 'classnames';
import { Image, Text, TextInlineProps } from '@featurefm/design-system';
import Link from 'next/link';
import React from 'react';

export interface MoreSolutionProps {
  background: string;
  icon: string;
  color: string;
  head: TextInlineProps;
  description: TextInlineProps;
  url: string;
}

export function MoreSolution(props: MoreSolutionProps) {
  return (
    <div
      className={classnames(
        `desktop:w-[630px] bg-${props.background} desktop:h-[540px] text-${props.color} p-[40px] desktop:p-[50px] desktop:flex flex-col justify-between shadow-[10px_10px_50px_0px_rgba(19,25,62,0.1)]`
      )}
    >
      <div>
        <Image src={props.icon} width="118px" />
        <Text
          text={props.head}
          as="span"
          className="text-background max-w-[380px] leading-8 desktop:leading-[44px] mt-6 desktop:mt-8 text-[25px] desktop:text-[35px] font-medium"
        />
        <Text
          text={props.description}
          as="span"
          className="max-w-[470px] font-light my-10 leading-6 text-base"
        />
      </div>
      <Link href={props.url}>
        <a className="font-semibold text-base flex items-center">
          Learn More
          <svg
            version="1.1"
            className={`ml-2 text-${props.color}`}
            width="8px"
            height="13px"
            viewBox="0 0 8.0 13.0"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <clipPath id="i0">
                <path d="M1920,0 L1920,10265 L0,10265 L0,0 L1920,0 Z"></path>
              </clipPath>
            </defs>
            <g transform="translate(-1067.0 -9288.0)">
              <g clipPath="url(#i0)">
                <g transform="translate(0.0 1239.4000000000015)">
                  <g transform="translate(0.0 6466.0)">
                    <g transform="translate(310.0 0.0)">
                      <g transform="translate(0.0 869.0)">
                        <g transform="translate(0.0 216.0)">
                          <g transform="translate(669.9999999999991 120.0)">
                            <g transform="translate(0.0 373.0)">
                              <g transform="translate(87.99999999998545 6.000000000000001)">
                                <path
                                  d="M0,10.286 L5.143,5.143 L0,0"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  fill="none"
                                  strokeMiterlimit="10"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </a>
      </Link>
    </div>
  );
}

export default MoreSolution;
