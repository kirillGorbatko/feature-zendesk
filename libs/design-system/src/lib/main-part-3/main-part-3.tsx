/* eslint-disable-next-line */
import {
  Button,
  TextInlineProps,
  ViewPort,
  Text,
  ButtonProps,
  ColorBlendOverlay,
  KnowWhatWorks,
  KnowWhatWorksMobile,
  TitleAnim,
} from '@featurefm/design-system';

export interface MainPart3Props {
  title: TextInlineProps;
  description: TextInlineProps;
  tag: string;
  ctaButton: ButtonProps;
  isMobile: boolean;
}

export function MainPart3(props: MainPart3Props) {
  return (
    <div className="overflow-hidden">
      <ViewPort className="text-primary1">
        {/*
        <ColorBlendOverlay
          id="2"
          width="100%"
          left="0"
          top="0"
          height="100vh"
          duration="1.1s"
          foreground="#fff"
          background="#9B62FF"
          text={props.isMobile ? props.title.mobile : props.title.desktop}
          isMobile={props.isMobile}
        />        
        */}
        <div className="mt-64">
          <TitleAnim
            title={['Know what', 'works and', 'use it to grow.']}
            color="#9B62FF"
            animationType="onview"
          />
        </div>
      </ViewPort>
      <section className="flex desktop:items-center relative flex-col">
        <div className="tablet:hidden overflow-hidden h-[300px] my-24">
          <KnowWhatWorksMobile />
        </div>
        <div className="hidden tablet:flex tablet:absolute tablet:w-5/6 desktop:w-[1200px] tablet:justify-end tablet:-top-32 desktop:mr-32">
          <KnowWhatWorks />
        </div>
        <ViewPort>
          <div>
            <div className="tablet:mt-[300px] text-xl font-light">
              {props.tag}
            </div>
            <div
              className="mt-5 text-[40px] leading-[50px] font-light"
              style={{ maxWidth: '600px' }}
            >
              <Text text={props.description} as="span" />
            </div>
            <Button
              {...props.ctaButton}
              size="extra-large"
              className="bg-primary1 mt-20 block mx-auto tablet:mx-0"
            />
          </div>
        </ViewPort>
      </section>
    </div>
  );
}

export default MainPart3;
