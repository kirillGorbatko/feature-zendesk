import styles from './search-button.module.scss';
import { SearchIcon } from '@featurefm/design-system';

export function SearchButton() {
  return (
    <button
      className={styles['search_button']}
      type="submit"
      aria-label="Search"
    >
      <SearchIcon />
    </button>
  );
}
