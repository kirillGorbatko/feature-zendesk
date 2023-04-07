import classNames from 'classnames';
import styles from './tabs-pagination.module.scss';

type TabsPaginationProps = {
  amount: number;
  activeIndex?: number;
  handleClick: (arg0: number) => void;
};

export function TabsPagination({
  amount,
  handleClick,
  activeIndex = 0,
}: TabsPaginationProps) {
  return (
    <div className={styles['tabs_pagination']}>
      <ul className={styles['tabs_pagination__list']}>
        {Array.from(new Array(amount)).map((_, index) => (
          <li className={styles['tabs_pagination__item']} key={index}>
            <button
              className={classNames(styles['tabs_pagination__btn'], {
                [styles['tabs_pagination__btn--active_state']]:
                  index === activeIndex,
              })}
              type="button"
              onClick={() => handleClick(index)}
              aria-label={`go to ${index + 1} tab`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TabsPagination;
