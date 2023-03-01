import React, { FormEvent, FormEventHandler, useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

// import { SearchButton } from '../search-button/search-button';
import { SearchIcon, CrossIcon, SearchButton } from '@featurefm/design-system';
import Input from '../input/input';

import styles from './search-form.module.scss';
import classNames from 'classnames';
import { clearConfig } from 'isomorphic-dompurify';

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
  const [tl, setTl] = useState(gsap.timeline({
    paused: true,
  }));
  const [inputText, setInputText] = useState(initialQuery);

  const $trigger = useRef<HTMLDivElement>(null);
  const $triggerBg = useRef<HTMLDivElement>(null);
  const $triggerBgDecor = useRef<HTMLDivElement>(null);
  const $bg = useRef<HTMLDivElement>(null);
  const $form = useRef<HTMLFormElement>(null);
  const $formWrap = useRef<HTMLDivElement>(null);
  const $hint = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const popupOpenClass = 'body--popup_open';

  const initAnim = () => {
    const formPos = $form.current?.getBoundingClientRect()
    const triggerPos = $trigger.current?.getBoundingClientRect();

    const triggerOffset = triggerPos.top - formPos.top
    const triggerSideOffset = triggerPos.left - formPos.left;

    const formBorderRadius = parseFloat(window.getComputedStyle($triggerBgDecor.current).getPropertyValue("border-radius"));
    const triggerWidth = $triggerBg.current?.clientWidth;
    const formWidth = $form.current?.clientWidth - formBorderRadius * 2;
    const widthRatio = formWidth / triggerWidth;
    
    tl
      .addLabel('start')
      .to($trigger.current, {
        y: triggerOffset * -1,
        zIndex: 300,
      })
      .addLabel('step1')
      .to($trigger.current, {
        x: triggerSideOffset * -1,
      })
      .to($triggerBg.current, {
        scaleX: widthRatio,
      }, 'step1')
      .to($triggerBgDecor.current, {
        x: triggerSideOffset * 2,
      }, 'step1')
      .addLabel('step2')
      .set($formWrap.current, {
        opacity: 1,
      }, 'step2')
      .to($trigger.current, {
        opacity: 0,
        pointerEvents: 'none',
      }, 'step2')
      .to($bg.current, {
        opacity: 1,
      }, 'step2-=.8')
      .to($hint.current, {
        opacity: 1,
      }, 'step2')

    tl.timeScale(2)
    tl.play();
  }

  const handleOpen = () => {
    tl.clear();
    setOpen(true);
    document.body.classList.add(popupOpenClass);
    initAnim();
  };

  const handleClose = (e:any) => {
    e.preventDefault();
    setOpen(false);
    setInputText('');
    document.body.classList.remove(popupOpenClass);
    tl.reverse();
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    handleClose(e);
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
        <div  className={styles['search_form__bg']} ref={$bg}></div>
        <div
          ref={$formWrap}
          className={classNames(styles['search_form__container'], {
            [styles['search_form__container--active_state']]:
              inputText && inputText.length > 0,
          })}
        >
          <form
            ref={$form}
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
        <div className={styles['search_form__hint']} ref={$hint}>
          Go ahead, <br /> type something
        </div>
      </div>
      <div
        className={classNames(styles['search_form__trigger'], {
          [styles['search_form__trigger--center_align']]: mobAlign === 'center',
          [styles['search_form__trigger--right_align']]: mobAlign === 'right',
        })}
      >
        <div className={styles['search_form__wrap']} ref={$trigger}>
          <div className={styles['search_form__wrap_bg']}>
            <div className={styles['search_form__wrap_bg_decor']}></div>
            <div className={styles['search_form__wrap_bg_in']} ref={$triggerBg}></div>
            <div className={styles['search_form__wrap_bg_decor']} ref={$triggerBgDecor}></div>
          </div>
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
