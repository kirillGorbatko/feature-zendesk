import { LinkTarget } from '@featurefm/shared/types';
import { trace } from 'console';
import A from '../a/a';
import FacebookIcon from '../icons/facebook-icon/facebook-icon';
import InstagramIcon from '../icons/instagram-icon/instagram-icon';
import LinkedinIcon from '../icons/linkedin-icon/linkedin-icon';

type SocialLinkProps = {
  href: string;
  iconName: 'facebook' | 'instagram' | 'linkedin';
  target?: LinkTarget;
};

export function SocialLink({ href, iconName, target }: SocialLinkProps) {
  return (
    <A href={href} target={target}>
      <span className="social_list__link">
        {iconName === 'facebook' && <FacebookIcon />}
        {iconName === 'instagram' && <InstagramIcon />}
        {iconName === 'linkedin' && <LinkedinIcon />}
      </span>
      <style jsx>
        {`
          .social_list__link {
            transition: color 0.2s ease-in-out;
            display: block;
          }
          .social_list__link:hover,
          .social_list__link:focus {
            color: #9b62ff;
            text-decoration: none;
          }
          @media screen and (min-width: 1024px) {
            .social_list__link {
              max-width: 1.5rem;
              height: 1.3rem;
            }
          }
          @media screen and (max-width: 1023px) {
            .social_list__link {
              max-width: 1.3rem;
              height: 1.1rem;
            }
          }
        `}
      </style>
    </A>
  );
}

export default SocialLink;
