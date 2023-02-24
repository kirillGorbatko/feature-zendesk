import React, { FormEvent, FormEventHandler, useState } from 'react';

// import { SearchButton } from '../search-button/search-button';
import { SearchIcon, CrossIcon, SearchButton } from '@featurefm/design-system';
import Input from '../input/input';

import styles from './search-form.module.scss';
import classNames from 'classnames';

export type Align = 'center' | 'right' | 'left';

interface SearchFormProps {
  mobAlign?: Align;
  isMobile?: boolean;
  initialQuery?: string | null;
  handleSubmit?: FormEventHandler<HTMLFormElement>;
}

export function SearchForm({
  mobAlign,
  isMobile,
  initialQuery = '',
  handleSubmit = (e) => e.preventDefault,
}: SearchFormProps) {
  const [isOpen, setOpen] = useState(false);
  const [inputText, setInputText] = useState(initialQuery);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const popupOpenClass = 'body--popup_open';
  const handleOpen = () => {
    setOpen(true);
    document.body.classList.add(popupOpenClass);
  };
  const handleClose = () => {
    setOpen(false);
    setInputText('');
    document.body.classList.remove(popupOpenClass);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    handleClose();
    handleSubmit(e);
  };

  return (
    <div
      className={classNames(styles['search_form'], {
        [styles['search_form--hidden_mobile_mod']]: isMobile,
      })}
    >
      <div
        className={classNames(styles['search_form__main'], {
          [styles['search_form__main--open_state']]: isOpen,
        })}
      >
        <div
          className={classNames(styles['search_form__container'], {
            [styles['search_form__container--active_state']]:
              inputText && inputText.length > 0,
          })}
        >
          <form
            role="search"
            data-search=""
            data-instant="true"
            autoComplete="off"
            // action="/hc/en-us/search/"
            action="/search"
            acceptCharset="UTF-8"
            onSubmit={onSubmit}
          >
            <input
              name="utf8"
              type="hidden"
              defaultValue="✓"
              autoComplete="off"
            />
            <Input
              onChange={handleChange}
              value={inputText || ''}
              type="search"
              name="query"
              id="query"
              required
              placeholder="Search"
              autoComplete="off"
              aria-label="Search"
            />
            <SearchButton />
          </form>
          <button
            onClick={handleClose}
            className={styles['search_form__cancel']}
            type="button"
          >
            <CrossIcon />
          </button>
        </div>
        <div className={styles['search_form__hint']}>
          Go ahead, <br /> type something
        </div>
      </div>
      <div
        className={classNames(styles['search_form__trigger'], {
          [styles['search_form__trigger--center_align']]: mobAlign === 'center',
          [styles['search_form__trigger--right_align']]: mobAlign === 'right',
        })}
      >
        <div className={styles['search_form__wrap']}>
          <button
            onClick={handleOpen}
            className={styles['search_form__trigger_btn']}
            type="button"
          >
            <div className={styles['search_form__trigger_icon']}>
              <SearchIcon />
            </div>
            <div className={styles['search_form__trigger_title']}>Search</div>
          </button>
        </div>
      </div>
      <style jsx global>
        {`
          body.body--popup_open {
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
}
