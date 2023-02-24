import classNames from 'classnames';
import SocialLink from '../social-link/social-link';

type SocialListProps = {
  align?: 'left' | 'center' | 'right';
};

export function SocialList({ align }: SocialListProps) {
  return (
    <ul
      className={classNames('social_list', {
        'social_list--center_align': align === 'center',
        'social_list--right_align': align === 'right',
      })}
    >
      <li className="social_list__item">
        <SocialLink href="/" iconName="facebook" />
      </li>
      <li className="social_list__item">
        <SocialLink href="/" iconName="instagram" />
      </li>
      <li className="social_list__item">
        <SocialLink href="/" iconName="linkedin" />
      </li>
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

          @media screen and (min-width: 1024px) {
            .social_list__item {
              padding: 0 1.2rem 1.2rem 0;
            }
          }
          @media screen and (max-width: 1023px) {
            .social_list__item {
              padding: 0 2.5rem 1.2rem 0;
            }
          }
        `}
      </style>
    </ul>
  );
}

export default SocialList;
