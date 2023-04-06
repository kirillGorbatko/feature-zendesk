import styles from '../links-card.module.scss';
import classNames from 'classnames';

export function Podcast() {
  return (
    <>
      <svg
        className={classNames(styles['icon'], styles['icon--desktop_mod'])}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 57 46"
      >
        <defs>
          <clipPath id="gfsxa">
            <path d="M0 0h57v46H0z" />
          </clipPath>
          <clipPath id="gfsxb">
            <path d="M0 0h25v25H0z" />
          </clipPath>
        </defs>
        <g>
          <g>
            <g />
            <g clipPath="url(#gfsxa)">
              <g>
                <g>
                  <path fill="#ff5262" d="M0 0h25v25H0z" />
                </g>
                <g clipPath="url(#gfsxb)">
                  <path
                    fill="#58ecca"
                    d="M13.87 25c0 4.257 3.13 7.726 7 7.726 3.866 0 7-3.469 7-7.726v-7.252c0-4.28-3.134-7.748-7-7.748-3.87 0-7 3.468-7 7.748z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={20}
                    strokeWidth={2}
                    d="M13.75 25c0 4.257 3.468 7.726 7.748 7.726 4.278 0 7.747-3.469 7.747-7.726v-7.252A7.747 7.747 0 0 0 21.498 10a7.746 7.746 0 0 0-7.748 7.748z"
                  />
                </g>
                <g>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={20}
                    strokeWidth={2}
                    d="M21.496 37.886v6.594"
                  />
                </g>
                <g>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={20}
                    strokeWidth={2}
                    d="M14.93 44.487h13.139"
                  />
                </g>
                <g>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={20}
                    strokeWidth={2}
                    d="M10.66 32C13 35.529 17 37.894 21.502 37.894 26 37.894 30 35.53 32.345 32"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <svg
        className={classNames(styles['icon'], styles['icon--mobile_mod'])}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
      >
        <defs>
          <clipPath id="cun8a">
            <path d="M0 0h50v50H0z" />
          </clipPath>
          <clipPath id="cun8b">
            <path d="M9 0h25v25H9z" />
          </clipPath>
        </defs>
        <g>
          <g>
            <g />
            <g clipPath="url(#cun8a)">
              <g>
                <g>
                  <path fill="#ff5262" d="M9 0h25v25H9z" />
                </g>
                <g clipPath="url(#cun8b)">
                  <path
                    fill="#58ecca"
                    d="M22.87 25c0 4.257 3.13 7.726 7 7.726 3.866 0 7-3.469 7-7.726v-7.252c0-4.28-3.134-7.748-7-7.748-3.87 0-7 3.468-7 7.748z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={20}
                    strokeWidth={2}
                    d="M22.75 25c0 4.257 3.468 7.726 7.748 7.726 4.278 0 7.747-3.469 7.747-7.726v-7.252A7.747 7.747 0 0 0 30.498 10a7.746 7.746 0 0 0-7.748 7.748z"
                  />
                </g>
                <g>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={20}
                    strokeWidth={2}
                    d="M30.497 37.886v6.594"
                  />
                </g>
                <g>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={20}
                    strokeWidth={2}
                    d="M23.93 44.487h13.139"
                  />
                </g>
                <g>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={20}
                    strokeWidth={2}
                    d="M19.66 32C22 35.529 26 37.894 30.502 37.894 35 37.894 39 35.53 41.345 32"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
}
