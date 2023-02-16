import React from 'react';
import { FMButton, SocialList } from '@featurefm/design-system';
import { NAVIGATION_MOCK_DATA, PRIVACY_NAVIGATION_MOCK_DATA } from './data';

import { Navigation, PrivacyNavigation } from './ui';

import styles from './fm-footer.module.scss';

export function FMFooter() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__in']}>
        <div className={styles['footer__top']}>
          <Navigation navigationItems={NAVIGATION_MOCK_DATA} />
          <div className={styles['footer__side']}>
            <div className={styles['footer__btn_w']}>
              <FMButton variant="secondary" size="lg" mobileWidth="full">
                Request a Demo
              </FMButton>
            </div>
            <SocialList align="center" />
          </div>
        </div>
        <div className={styles['footer__bottom']}>
          <PrivacyNavigation
            items={PRIVACY_NAVIGATION_MOCK_DATA}
            copyright="©Feature FM 2022"
          />
        </div>
      </div>
    </footer>
  );
}

export default FMFooter;
