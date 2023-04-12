import styles from './icons-section.module.scss';
import { Container } from '../container/container';
import {
  SolutionIcons,
  SolutionIconsProps,
} from '../solution-icons/solution-icons';

export function IconsSection(props: SolutionIconsProps) {
  return (
    <section className={styles['section']}>
      <Container>
        <SolutionIcons {...props} />
      </Container>
    </section>
  );
}
