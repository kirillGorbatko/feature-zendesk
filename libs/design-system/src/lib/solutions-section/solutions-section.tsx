import classNames from 'classnames';
import { Advantage, AdvantageProps } from '../advantage/advantage';
import { Container } from '../container/container';
import FMButton from '../fm-button/fm-button';
import { FmTitle } from '../fm-title/fm-title';
import Image from '../image/image';
import { PictureProps } from '../picture';
import { Typography, TypographyProps } from '../typography/typography';
import styles from './solutions-section.module.scss';

export type SolutionsSectionsProps = {
  version?: 'base' | 'v2' | 'v3' | 'v4';
  isInverse?: boolean;
  inverseLayout?: boolean;
  tag?: string | React.ReactNode;
  title?: TypographyProps;
  description?: TypographyProps;
  topCapabilites?: AdvantageProps[];
  ctaButton?: {
    text: string;
    link: string;
    type?: string;
  };
  image?: PictureProps;
  imageUrl?: string;
  id?: string;
};

export function SolutionsSection({
  version = 'base',
  title,
  description,
  image,
  topCapabilites,
  ctaButton,
  tag,
  isInverse,
  imageUrl,
  inverseLayout,
}: SolutionsSectionsProps) {
  const prepareMobileUrl: string[] | undefined = imageUrl?.split('.');
  let mobileUrl;

  if (prepareMobileUrl && prepareMobileUrl.length > 1) {
    const type = prepareMobileUrl.pop() || '';
    mobileUrl = prepareMobileUrl.join('.').concat('-mobile.').concat(type);
  }

  return (
    <section
      className={classNames(styles['solutions_section'], {
        [styles['solutions_section--reverted_mod']]: inverseLayout,
        [styles['solutions_section--bg_mod']]: isInverse,
        [styles['solutions_section--v1_mod']]: version === 'base',
        [styles['solutions_section--v2_mod']]: version === 'v2',
        [styles['solutions_section--v3_mod']]: version === 'v3',
        [styles['solutions_section--v4_mod']]: version === 'v4',
      })}
    >
      <Container>
        <div className={styles['solutions_section__inner']}>
          <div className={styles['solutions_section__content_col']}>
            {tag && (
              <div className={styles['solutions_section__label']}>{tag}</div>
            )}
            {title && (
              <div className={styles['solutions_section__title']}>
                <FmTitle
                  variant={version === 'v2' ? 'h7' : 'h5'}
                  color={!isInverse ? 'primary' : 'white'}
                >
                  <Typography {...title} />
                </FmTitle>
              </div>
            )}
            {description && (
              <div className={styles['solutions_section__descr']}>
                <Typography {...description} disableEscaping />
              </div>
            )}
            {topCapabilites && topCapabilites.length > 0 && (
              <div className={styles['solutions_section__advantages']}>
                <ul className={styles['solutions_section__advantages_list']}>
                  {topCapabilites.map((advantage, index) => (
                    <li
                      className={styles['solutions_section__advantages_item']}
                      key={index}
                    >
                      <Advantage reverted={!isInverse}>
                        {advantage.capability}
                      </Advantage>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {ctaButton && (
              <div
                className={classNames(
                  styles['solutions_section__button'],
                  styles['solutions_section__button--desktop_mod']
                )}
              >
                <FMButton
                  indent="lg"
                  variant={!isInverse ? 'primary' : 'tertiary'}
                  size="xxl"
                  children={ctaButton.text}
                  href={ctaButton.link}
                />
              </div>
            )}
          </div>
          <div className={styles['solutions_section__image_col']}>
            {imageUrl && (
              <div className={styles['solutions_section__image']}>
                <Image src={imageUrl} mobileSrc={mobileUrl} />
                {/* <Picture img={imageUrl} /> */}
              </div>
            )}
          </div>
          {ctaButton && (
            <div
              className={classNames(
                styles['solutions_section__button'],
                styles['solutions_section__button--mobile_mod']
              )}
            >
              <FMButton
                indent="lg"
                variant={!isInverse ? 'primary' : 'tertiary'}
                size="xl"
                children={ctaButton.text}
                href={ctaButton.link}
                mobileFontSize="lg"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default SolutionsSection;
