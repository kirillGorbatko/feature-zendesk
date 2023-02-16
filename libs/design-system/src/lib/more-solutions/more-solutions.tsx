/* eslint-disable-next-line */
import React from 'react';
import classnames from 'classnames';
import {
  H3,
  Image,
  TextInlineProps,
  Text,
  H4,
  MoreSolution,
  MoreSolutionProps,
} from '@featurefm/design-system';

interface MoreSolutionsElementProps {
  imageUrl: string;
  title: TextInlineProps;
  link: string;
  description: TextInlineProps;
}

export interface MoreSolutionsProps {
  title: string;
  features: MoreSolutionsElementProps[];
}

export function MoreSolutions(props: MoreSolutionsProps) {
  return (
    <div className="px-[30px] desktop:px-0 desktop:w-[1200px] m-auto mt-20 desktop:mt-[150px] relative">
      <H4>{props.title}</H4>
      <div className="mt-[60px] desktop:mt-[100px]">
        <MoreSolution
          background="primary2"
          icon={props.features[0].imageUrl}
          url={props.features[0].link}
          color="foreground"
          head={props.features[0].title}
          description={props.features[0].description}
        />
      </div>
      <div className="desktop:absolute top-[220px] right-0 z-10">
        <MoreSolution
          background="foreground"
          icon={props.features[1].imageUrl}
          url={props.features[1].link}
          color="background"
          head={props.features[1].title}
          description={props.features[1].description}
        />
      </div>
    </div>
  );
}

export default MoreSolutions;
