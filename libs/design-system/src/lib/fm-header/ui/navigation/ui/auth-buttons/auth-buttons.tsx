import React from 'react';
import { FMButton } from '@featurefm/design-system';
import styles from './auth-buttons.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

export function AuthButtons() {
  return (
    <div className={styles['header__auth']}>
      <div className={styles['header__auth_item']}>
        <div className={styles['header__auth_link']}>
          <Link href="/">Login</Link>
        </div>
      </div>
      <div className={styles['header__auth_item']}>
        <div
          className={classNames(styles['header__auth_button'], [
            styles['header__auth_button--mobile_mod'],
          ])}
        >
          <FMButton variant="primary" size="lg" mobileWidth="full">
            Start now
          </FMButton>
        </div>
        <div
          className={classNames(styles['header__auth_button'], [
            styles['header__auth_button--desktop_mod'],
          ])}
        >
          <FMButton variant="secondary" size="sm">
            Start now
          </FMButton>
        </div>
      </div>
    </div>
  );
}

export default AuthButtons;
