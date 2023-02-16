import styles from './widget.module.scss';
import { WidgetIcon } from './widget_icon';

export function Widget() {
  return (
    <div className={styles['widget']}>
      <button
        type="button"
        aria-label="Vidget button"
        className={styles['widget__button']}
      >
        <span className={styles['widget__icon']}>
          <WidgetIcon />
        </span>
      </button>
    </div>
  );
}
