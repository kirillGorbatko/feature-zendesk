import classNames from 'classnames';
import { ReactNode } from 'react';

type SocialListProps = {
  align?: 'left' | 'center' | 'right';
  children: ReactNode;
};

export function SocialList({ align, children }: SocialListProps) {
  return (
    <div
      className={classNames('social_list', {
        'social_list--center_align': align === 'center',
        'social_list--right_align': align === 'right',
      })}
    >
      {children}
      <style jsx>
        {`
          .social_list {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
          .social_list--center_align {
            justify-content: center;
            align-content: center;
            align-items: center;
          }
          .social_list--right_align {
            justify-content: flex-end;
            align-content: flex-end;
            align-items: flex-end;
          }
          @media screen and (min-width: 1024px) {
            .social_list {
              margin: 0 -1.2rem -1.2rem 0;
            }
          }
          @media screen and (max-width: 1023px) {
            .social_list {
              margin: 0 -2.5rem -1.2rem 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default SocialList;
