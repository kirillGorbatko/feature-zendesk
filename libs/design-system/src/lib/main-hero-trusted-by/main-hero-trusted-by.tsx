/* eslint-disable-next-line */
import { Image, TextInlineProps, Text } from '../..';
import React from 'react';

export interface MainHeroTrustedByProps {
  text: TextInlineProps;
}

const partners = [
  '/img/partners/universal-logo.png',
  '/img/partners/secretly-group-dolby-atmos-feat.png',
  '/img/partners/secretly-canadian.png',
  '/img/partners/dangerbird.png',
  '/img/partners/jagjaguwar.png',
  '/img/partners/deadoceans.png',
  '/img/partners/300.png',
  '/img/partners/foundation.png',
]

export function MainHeroTrustedBy(props: MainHeroTrustedByProps) {
  return (
    <div className="text-center text-lg text-normal">
      <Text text={props.text} as="span" />
      <div className="flex flex-row mt-10 justify-center">
        {partners.map((x, index) => (
          <div key={index}>
            <Image
              src={x}
              width="130px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainHeroTrustedBy;
