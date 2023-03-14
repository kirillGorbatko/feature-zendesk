import {
  H3,
  Button,
  GetStartedBottomImage,
  H4,
  GetStartedLeftImage,
  GetStartedRightImage,
  Text,
  TextInlineProps,
} from '@featurefm/design-system';
import classnames from 'classnames';

export interface CTAButtonProps {
  text: string;
  link: string;
  type: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
}

/* eslint-disable-next-line */
export interface GetStartedCtaProps {
  mode?: 'dark' | 'light';
  title: TextInlineProps;
  description: TextInlineProps;
  darkLayout: boolean;
  ctaButton: CTAButtonProps;
}

GetStartedCta.defaultProps = {
  title: {
    desktop: 'Get started for free',
  },
  mode: 'light',
  description: {
    desktop:
      'You can use Feature.fm for free or subscribe to one of our pain plans. <br/> All paid plans come with a free trial of our Pro plan',
  },
  darkLayout: false,
  ctaButton: {
    text: 'Start now',
    link: 'https://login.feature.fm/signup/',
    type: 'primary',
  },
};

export function GetStartedCta(props: GetStartedCtaProps) {
  return (
    <div
      className={classnames('relative', {
        'text-background': props.darkLayout,
      })}
    >
      <div className="relative flex desktop:min-h-[472px] px-[30px] desktop:px-0">
        <div className="absolute top-[190px] left-0 hidden desktop:block">
          <GetStartedLeftImage darkLayout={props.darkLayout} />
        </div>
        <div className="flex-grow text-center z-10 relative my-[140px] tablet:my-[120px] tablet:mt-32">
          <Text text={props.title} as="h3" />
          <div className="font-light leading-[22px] tablet:leading-[26px] text-base max-w-[600px] mx-auto tablet:text-[17px] mt-[30px]">
            <Text text={props.description} />
          </div>
          <div className="mt-[30px] tablet:mt-10">
            <a href={props.ctaButton.link}>
              <Button
                size="large"
                text={props.ctaButton.text}
                mobileWidth="fit"
                type={props.ctaButton.type}
                onClick={
                  props.ctaButton.onClick ? props.ctaButton.onClick : undefined
                }
              ></Button>
            </a>
          </div>
        </div>
        <div className="absolute right-0 -mt-[60px] z-1 hidden desktop:block">
          <GetStartedRightImage darkLayout={true} />
        </div>
      </div>
      <div className="absolute -bottom-[31px] w-full z-1 desktop:hidden overflow-hidden">
        <GetStartedBottomImage darkLayout={true} />
      </div>
    </div>
  );
}

export default GetStartedCta;
