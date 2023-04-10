import FmDescr from '../fm-descr/fm-descr';
import { FMButton } from '../fm-button/fm-button';
import DOMPurify from 'isomorphic-dompurify';

import RectangleDecor from '../rectangle-decor/rectangle-decor';
import classNames from 'classnames';
import { FmTitle } from '../fm-title/fm-title';
import Container from '../container/container';
import styles from './fm-join-team-cta.module.scss';
import { FmGetStartedCtaProps } from '../fm-get-started-cta/fm-get-started-cta';
import { Typography } from '../typography/typography';

export type FmJoinTeamCtaProps = FmGetStartedCtaProps;

export function FmJoinTeamCta({
  title,
  description,
  ctaButton,
}: FmJoinTeamCtaProps) {
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
                styles['fm_join_team__decor--pos_1_mod']
              )}
            >
              <RectangleDecor size="medium" variant="purple" />
            </div>
            <div
              className={classNames(
                styles['fm_join_team__decor'],
                styles['fm_join_team__decor--pos_2_mod']
              )}
            >
              <RectangleDecor size="medium" variant="image" />
            </div>
            <div
              className={classNames(
                styles['fm_join_team__decor'],
                styles['fm_join_team__decor--pos_3_mod']
              )}
            >
              <RectangleDecor size="large" variant="purple" />
            </div>
            <div
              className={classNames(
                styles['fm_join_team__decor'],
                styles['fm_join_team__decor--pos_4_mod']
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
                styles['fm_join_team__decor--pos_1_mod']
              )}
            >
              <RectangleDecor size="secondary_sm" variant="purple" />
            </div>
            <div
              className={classNames(
                styles['fm_join_team__decor'],
                styles['fm_join_team__decor--pos_4_mod']
              )}
            >
              <RectangleDecor size="secondary_sm" variant="turquoise" />
            </div>
            <div
              className={classNames(
                styles['fm_join_team__decor'],
                styles['fm_join_team__decor--pos_3_mod']
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
                styles['fm_join_team__decor--pos_2_mod']
              )}
            >
              <RectangleDecor size="secondary_md" variant="image" />
            </div>
          </div>
          <div className={styles['fm_join_team__content']}>
            {title && (
              <>
                <div
                  className={classNames(
                    styles['fm_join_team__title'],
                    styles['fm_join_team__title--desktop_mod']
                  )}
                >
                  <FmTitle variant="h4" color="white">
                    <Typography
                      desktop={title.desktop}
                      mobile={title.mobile}
                      overrideMobile={title.overrideMobile}
                    />
                  </FmTitle>
                </div>
                <div
                  className={classNames(
                    styles['fm_join_team__title'],
                    styles['fm_join_team__title--mobile_mod']
                  )}
                >
                  <FmTitle variant="h4" color="secondary_purple">
                    <Typography
                      desktop={title.desktop}
                      mobile={title.mobile}
                      overrideMobile={title.overrideMobile}
                    />
                  </FmTitle>
                </div>
              </>
            )}

            {description && (
              <div className={styles['fm_join_team__text']}>
                <FmDescr>
                  <Typography
                    desktop={description.desktop}
                    mobile={description.mobile}
                    overrideMobile={description.overrideMobile}
                    disableEscaping
                  />
                </FmDescr>
              </div>
            )}

            {ctaButton && (
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
                    children={ctaButton.text}
                    href={ctaButton.link}
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
                    children={ctaButton.text}
                    width="full"
                    href={ctaButton.link}
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
