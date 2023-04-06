import FmDescr from '../fm-descr/fm-descr';
import { FMButton } from '../fm-button/fm-button';
import DOMPurify from 'isomorphic-dompurify';

import RectangleDecor from '../rectangle-decor/rectangle-decor';
import classNames from 'classnames';
import { FmTitle } from '../fm-title/fm-title';
import Container from '../container/container';
import styles from './fm-join-team-cta.module.scss';
import { FmGetStartedCtaProps } from '../fm-get-started-cta/fm-get-started-cta';

export type FmJoinTeamCtaProps = FmGetStartedCtaProps;

export function FmJoinTeamCta({ title, descr, button }: FmJoinTeamCtaProps) {
  return (
    <section className={styles['fm_join_team']}>
      <Container>
        <div className={styles['fm_join_team_in']}>
          <div
            className={classNames(
              styles['fm_join_team__decors'],
              styles['fm_join_team__decors--desktop_mod']
            )}
          >
            <div
              className={classNames(
                styles['fm_join_team__decor'],
                styles['fm_join_team__decor--pos-1-mod']
              )}
            >
              <RectangleDecor size="medium" variant="purple" />
            </div>
            <div
              className={classNames(
                styles['fm_join_team__decor'],
                styles['fm_join_team__decor--pos-2-mod']
              )}
            >
              <RectangleDecor size="medium" variant="image" />
            </div>
            <div
              className={classNames(
                styles['fm_join_team__decor'],
                styles['fm_join_team__decor--pos-3-mod']
              )}
            >
              <RectangleDecor size="large" variant="purple" />
            </div>
            <div
              className={classNames(
                styles['fm_join_team__decor'],
                styles['fm_join_team__decor--pos-4-mod']
              )}
            >
              <RectangleDecor size="sm2" variant="turquoise" />
            </div>
          </div>
          <div
            className={classNames(
              styles['fm_join_team__decors'],
              styles['fm_join_team__decors--mobile_mod']
            )}
          >
            <div
              className={classNames(
                styles['fm_join_team__decor'],
                styles['fm_join_team__decor--pos-1-mod']
              )}
            >
              <RectangleDecor size="secondary_sm" variant="purple" />
            </div>
            <div
              className={classNames(
                styles['fm_join_team__decor'],
                styles['fm_join_team__decor--pos-4-mod']
              )}
            >
              <RectangleDecor size="secondary_sm" variant="turquoise" />
            </div>
            <div
              className={classNames(
                styles['fm_join_team__decor'],
                styles['fm_join_team__decor--pos-3-mod']
              )}
            >
              <RectangleDecor
                size="secondary_long"
                variant="secondary_gradient"
              />
            </div>
            <div
              className={classNames(
                styles['fm_join_team__decor'],
                styles['fm_join_team__decor--pos-2-mod']
              )}
            >
              <RectangleDecor size="secondary_md" variant="image" />
            </div>
          </div>
          <div className={styles['fm_join_team__content']}>
            <div
              className={classNames(
                styles['fm_join_team__title'],
                styles['fm_join_team__title--desktop_mod']
              )}
            >
              <FmTitle variant="h3" color="white">
                {title}
              </FmTitle>
            </div>
            <div
              className={classNames(
                styles['fm_join_team__title'],
                styles['fm_join_team__title--mobile_mod']
              )}
            >
              <FmTitle variant="h3" color="secondary_purple">
                {title}
              </FmTitle>
            </div>
            <div className={styles['fm_join_team__text']}>
              <FmDescr>
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(descr),
                  }}
                ></div>
              </FmDescr>
            </div>
            {button && (
              <>
                <div
                  className={classNames(
                    styles['fm_join_team__button'],
                    styles['fm_join_team__button--desktop_mod']
                  )}
                >
                  <FMButton
                    variant="primary"
                    size="xxl"
                    children={button.title}
                    width="full"
                  />
                </div>
                <div
                  className={classNames(
                    styles['fm_join_team__button'],
                    styles['fm_join_team__button--mobile_mod']
                  )}
                >
                  <FMButton
                    variant="tertiary"
                    children={button.title}
                    width="full"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FmJoinTeamCta;
