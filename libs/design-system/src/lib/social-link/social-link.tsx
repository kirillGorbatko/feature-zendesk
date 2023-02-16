import A from '../a/a';
import FacebookIcon from '../icons/facebook-icon/facebook-icon';
import InstagramIcon from '../icons/instagram-icon/instagram-icon';
import LinkedinIcon from '../icons/linkedin-icon/linkedin-icon';

type SocialLinkProps = {
  href: string;
  iconName: 'facebook' | 'instagram' | 'linkedin';
};

export function SocialLink({ href, iconName }: SocialLinkProps) {
  return (
    <A href={href}>
      {iconName === 'facebook' && <FacebookIcon />}
      {iconName === 'instagram' && <InstagramIcon />}
      {iconName === 'linkedin' && <LinkedinIcon />}
    </A>
  );
}

export default SocialLink;
