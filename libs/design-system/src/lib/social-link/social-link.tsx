import { LinkTarget } from '@featurefm/shared/types';
import { trace } from 'console';
import A from '../a/a';
import FacebookIcon from '../icons/facebook-icon/facebook-icon';
import InstagramIcon from '../icons/instagram-icon/instagram-icon';
import LinkedinIcon from '../icons/linkedin-icon/linkedin-icon';
import styles from './social-link.module.scss';

type SocialLinkProps = {
  href: string;
  iconName: 'facebook' | 'instagram' | 'linkedin';
  target?: LinkTarget;
};

export function SocialLink({ href, iconName, target }: SocialLinkProps) {
  return (
    <A href={href} target={target}>
      <span className={styles["social_list__link"]}>
        {iconName === 'facebook' && <FacebookIcon />}
        {iconName === 'instagram' && <InstagramIcon />}
        {iconName === 'linkedin' && <LinkedinIcon />}
      </span>
    </A>
  );
}

export default SocialLink;
