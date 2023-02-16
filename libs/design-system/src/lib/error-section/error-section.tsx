import Link from 'next/link';
import { FMButton } from '@featurefm/design-system';
import styles from './error-section.module.scss';
import classNames from 'classnames';

import { FourHundredFour } from './assets/four-hundred-four';
import { FiveHundredFive } from './assets/five-hundred-five';
import { Waves } from './assets/waves';

interface ErrorSectionProps {
  errorNumber?: 404 | 505;
}

export function ErrorSection({ errorNumber = 404 }: ErrorSectionProps) {
  let mod = 'error_section--404_mod',
    title,
    text,
    Image;

  switch (errorNumber) {
    case 404: {
      title = 'Page Not Found!';
      text = 'Sorry, we can’t find the page you’re looking for.';
      Image = <FourHundredFour />;
      break;
    }
    case 505: {
      mod = 'error_section--505_mod';
      title = 'Server Error';
      text = 'Oops.. Something went wrong. Try to refresh the page.';
      Image = <FiveHundredFive />;
      break;
    }

    default:
      break;
  }

  return (
    <section className={classNames(styles['error_section'], styles[mod])}>
      <div className={styles['error_section__in']}>
        <div className={styles['error_section__content']}>
          <div className={styles['error_section__number']}>
            {Image}
            {errorNumber === 404 && (
              <div className={styles['error_section__waves']}>
                <Waves />
              </div>
            )}
          </div>
          <h1 className={styles['error_section__title']}>{title}</h1>
          <div className={styles['error_section__text']}>{text}</div>

          <Link href="/">
            <a>
              <FMButton variant="tertiary" size="lg">
                <span className={styles['error_section__btn_text']}>
                  Go to main page
                </span>
              </FMButton>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
