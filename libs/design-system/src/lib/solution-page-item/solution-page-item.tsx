/* eslint-disable-next-line */
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import classnames from 'classnames';
import {
  Button,
  Image,
  Text,
  TextInlineProps,
  ViewPort,
  ButtonProps,
  H4,
} from '@featurefm/design-system';

type Capability = {
  capability: string;
};

export type SolutionPageItemsProps = {
  title: string;
  features: SolutionPageItemProps[];
};

export interface SolutionPageItemProps {
  imageUrl: string;
  imgWidth: string;
  mobileImageOnTop?: boolean;
  useSmallTitle: boolean;
  threshold?: number;
  className?: string;
  imageClassName?: string;
  counter?: number;
  tag?: string;
  title: TextInlineProps;
  description: TextInlineProps;
  topCapabilites?: Capability[];
  isInverse?: boolean;
  ctaButton: ButtonProps;
}

SolutionPageItem.defaultProps = {
  isInverse: false,
  counter: 1,
  threshold: 0.3,
  actionType: 'primary',
};

function chunk(items: string[], size: number) {
  const chunks: string[][] = [];
  items = ([] as string[]).concat(...items);

  while (items.length) {
    chunks.push(items.splice(0, size));
  }

  return chunks;
}

export function SolutionPageItem(props: SolutionPageItemProps) {
  const reverse = (props.counter || 1) % 2 === 0;
  const { ref } = useInView({
    /* Optional options */
    threshold: props.threshold,
    onChange: (inView) => {
      if (props.isInverse) {
        if (inView) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      } else {
        if (inView) {
          document.body.classList.remove('dark');
        }
      }
    },
  });
  const notes = chunk(
    (props.topCapabilites || []).map((x) => x.capability),
    (props.topCapabilites || []).length > 4 ? 2 : 1
  );

  useEffect(() => {
    return () => {
      if (document?.body) {
        document.body.classList.remove('dark')
      }
    }
  }, []);

  return (
    <div className="relative" ref={ref}>
      <div
        className={classnames('flex flex-col desktop:pt-0 pt-20', {
          'flex-col-reverse': props.mobileImageOnTop,
        })}
      >
        <ViewPort
          className={classnames(
            `flex items-start z-10 relative justify-between ${props.className}`,
            {
              'desktop:flex-row': !reverse,
              'desktop:flex-row-reverse': reverse,
            }
          )}
        >
          <div className="max-w-[500px] dark:text-background">
            {props.tag && (
              <div className="font-regular text-base">{props.tag}</div>
            )}
            {props.useSmallTitle ? (
              <Text
                text={props.title}
                as="div"
                className="mt-5 text-[30px] font-medium"
              />
            ) : (
              <Text text={props.title} as="h4" className="mt-5" />
            )}
            <Text
              text={props.description}
              as="div"
              className="font-light text-base leading-[22px] mt-10 desktop:mt-8"
            />
            {notes && notes.length > 0 && (
              <div className="mt-[60px]">
                {notes.map((subNotes, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-[30px] tablet:flex-row"
                  >
                    {subNotes.map((note, index) => (
                      <div
                        key={index}
                        className="flex text-center justify-center desktop:text-left px-[30px] py-4 desktop:py-5 mb-5 desktop:mb-10 font-regular text-[13px] desktop:text-sm w-full desktop:w-fit border border-[#cfcfcf] dark:border-[#3a3a3a] rounded-[25px]"
                      >
                        {note}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
            {props.ctaButton && props.ctaButton.text && (
              <Button
                {...props.ctaButton}
                className="hidden desktop:block mt-[60px] w-fit"
                size="extra-large"
              />
            )}
          </div>
        </ViewPort>
        <div
          className={classnames(
            `desktop:absolute w-full top-0 flex justify-center ${props.imageClassName}`
          )}
        >
          <Image
            className={classnames('desktop:w-[1366px] flex', {
              'desktop:justify-start': reverse,
              'desktop:justify-end': !reverse,
            })}
            src={props.imageUrl}
            alt={`${props.tag || 'Feature'} illustration`}
            mobileSrc={props.imageUrl.replace('.png', '-mobile.png')}
            mobileWidth="100%"
            width={props.imgWidth}
            height="auto"
          />
        </div>
      </div>
      <ViewPort>
        {props.ctaButton && props.ctaButton.text && (
          <Button
            {...props.ctaButton}
            className="desktop:hidden text-lg w-full"
            size="large"
          />
        )}
      </ViewPort>
    </div>
  );
}

export default SolutionPageItem;
