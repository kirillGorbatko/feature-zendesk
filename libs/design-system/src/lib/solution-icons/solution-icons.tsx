import styles from './solution-icons.module.scss';

const defaultIcons = [
  'spotify',
  'music',
  'deezer',
  'tidal',
  'youtube',
  'am',
  'facebook',
  'tik-tok',
  'sound-cloud',
  'instagram',
  'p',
];

const integratedIcons = defaultIcons.map(
  (iconName) => `/images/solution-icons/${iconName}.png`
);

export type SolutionIconsProps = {
  icons?: string[];
  label?: string;
};

export function SolutionIcons({
  icons = integratedIcons,
  label,
}: SolutionIconsProps) {
  return (
    <div className={styles['solution_icons']}>
      <div className={styles['solution_icons__column']}>
        {label && (
          <div className={styles['solution_icons__label']}>{label}</div>
        )}
      </div>
      <div className={styles['solution_icons__column']}>
        <div className={styles['solution_icons__container']}>
          <ul className={styles['solution_icons__list']}>
            {icons.map((icon, index) => (
              <li key={index} className={styles['solution_icons__item']}>
                <picture className={styles['solution_icons__picture']}>
                  <img
                    className={styles['solution_icons__image']}
                    src={icon}
                    alt={`icon ${defaultIcons[index]}`}
                  />
                </picture>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
