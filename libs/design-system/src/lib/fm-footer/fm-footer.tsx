import React from 'react';
import {
  FMButton,
  SocialLink,
  SocialList,
  SocialItem,
} from '@featurefm/design-system';

import { Navigation, PrivacyNavigation } from './ui';

import styles from './fm-footer.module.scss';
import { FooterNavigation, Link } from '@featurefm/shared/types';

type FMFooterProps = {
  mainNavigation: FooterNavigation;
  privacyNavigation: Link[];
};

export function FMFooter({ mainNavigation, privacyNavigation }: FMFooterProps) {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__in']}>
        <div className={styles['footer__top']}>
          <Navigation items={mainNavigation} />
          <div className={styles['footer__side']}>
            <div className={styles['footer__btn_w']}>
              <a href="https://login.feature.fm/signup/">
                <FMButton variant="secondary" size="lg" mobileWidth="full">
                  Request a Demo
                </FMButton>
              </a>
            </div>
            <SocialList align="center">
              <SocialItem>
                <SocialLink
                  href="https://www.facebook.com/ffm.to/"
                  iconName="facebook"
                  target="_blank"
                />
              </SocialItem>
              <SocialItem>
                <SocialLink
                  href="https://www.instagram.com/feature.fm/"
                  iconName="instagram"
                  target="_blank"
                />
              </SocialItem>
              <SocialItem>
                <SocialLink
                  href="https://www.linkedin.com/company/feature-fm"
                  iconName="linkedin"
                  target="_blank"
                />
              </SocialItem>
            </SocialList>
          </div>
        </div>
        <div className={styles['footer__bottom']}>
          <PrivacyNavigation
            items={privacyNavigation}
            copyright="©Feature FM 2023"
          />
        </div>
      </div>
    </footer>
  );
}

export default FMFooter;
