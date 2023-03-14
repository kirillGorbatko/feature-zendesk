import React from 'react';
import { FMButton } from '@featurefm/design-system';
import styles from './auth-buttons.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

interface AuthButtonsProps {
  variant?: 'transparent' | 'inverted';
}

export function AuthButtons({ variant }: AuthButtonsProps) {
  return (
    <div
      className={classNames(styles['header__auth'], {
        [styles['header__auth--inverted_mod']]: variant === 'inverted',
      })}
    >
      <div className={styles['header__auth_item']}>
        <div className={styles['header__auth_link']}>
          <Link href={`${process.env['NEXT_PUBLIC_LOGIN_DOMAIN']}/login/`}>
            Login
          </Link>
        </div>
      </div>
      <div className={styles['header__auth_item']}>
        <div
          className={classNames(styles['header__auth_button'], [
            styles['header__auth_button--mobile_mod'],
          ])}
        >
          <a href={`${process.env['NEXT_PUBLIC_LOGIN_DOMAIN']}/signup/`}>
            <FMButton variant="primary" size="lg" mobileWidth="full">
              Start now
            </FMButton>
          </a>
        </div>
        <div
          className={classNames(styles['header__auth_button'], [
            styles['header__auth_button--desktop_mod'],
          ])}
        >
          <a href={`${process.env['NEXT_PUBLIC_LOGIN_DOMAIN']}/signup/`}>
            <FMButton
              variant={variant === 'inverted' ? 'inverted' : 'secondary'}
              size="sm"
            >
              Start now
            </FMButton>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AuthButtons;
