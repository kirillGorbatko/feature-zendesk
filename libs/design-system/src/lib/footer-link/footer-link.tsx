import { A } from '@featurefm/design-system';

/* eslint-disable-next-line */
export interface FooterLinkProps {
  href: string;
  text: string;
}

export function FooterLink(props: FooterLinkProps) {
  return (
    <A href={props.href} type="footer-link">
      <div className="text-sm text-[15px] font-light">{props.text}</div>
    </A>
  );
}

export default FooterLink;
