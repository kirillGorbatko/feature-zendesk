import { ReactNode } from 'react';

type SocialItem = {
  children: ReactNode;
};

export function SocialItem({ children }: SocialItem) {
  return (
    <div className="social_item">
      {children}
      <style jsx>
        {`
          .social_item a {
            background-color: tomato;
            color: white;
          }
          @media screen and (min-width: 1024px) {
            .social_item {
              padding: 0 1.2rem 1.2rem 0;
            }
          }
          @media screen and (max-width: 1023px) {
            .social_item {
              padding: 0 2.5rem 1.2rem 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default SocialItem;
