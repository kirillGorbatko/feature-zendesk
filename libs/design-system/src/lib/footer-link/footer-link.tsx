import { A } from '@featurefm/design-system';

/* eslint-disable-next-line */
export interface FooterLinkProps {
  href: string;
  text: string;
  target: '_blank' | '_self' | '_parent' | '_top';
}

FooterLink.defaultProps = {
  target: '_self',
};

export function FooterLink(props: FooterLinkProps) {
  return (
    <A href={props.href} target={props.target} type="footer-link">
      <div className="text-sm text-[15px] font-light">{props.text}</div>
    </A>
  );
}

export default FooterLink;
