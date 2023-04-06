import styles from '../links-card.module.scss';
import classNames from 'classnames';

export function Calendar() {
  return (
    <>
      <svg
        className={classNames(styles['icon'], styles['icon--desktop_mod'])}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 57 46"
      >
        <defs>
          <clipPath id="8itsa">
            <path d="M0 0h57v46H0z" />
          </clipPath>
        </defs>
        <g>
          <g>
            <g />
            <g clipPath="url(#8itsa)">
              <g>
                <g>
                  <g>
                    <g>
                      <path fill="#9b62ff" d="M41.824 0H16.2v25.624h25.624z" />
                    </g>
                    <g>
                      <path
                        fill="#ff5262"
                        d="M15.86 17.33h14.862v8.297H15.86z"
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
                        d="M1.51 17.33v0h29.21V45H1.511v0z"
                      />
                    </g>
                    <g>
                      <path
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit={20}
                        strokeWidth={2}
                        d="M1.512 26.552h29.211"
                      />
                    </g>
                    <g>
                      <path
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit={20}
                        strokeWidth={2}
                        d="M7.5 13v8.5"
                      />
                    </g>
                    <g>
                      <path
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit={20}
                        strokeWidth={2}
                        d="M24.5 13v8.5"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames(styles['icon'], styles['icon--mobile_mod'])}
        viewBox="0 0 50 50"
      >
        <defs>
          <clipPath id="ndu2a">
            <path d="M0 0h50v50H0z" />
          </clipPath>
        </defs>
        <g>
          <g>
            <g />
            <g clipPath="url(#ndu2a)">
              <g>
                <g>
                  <g>
                    <g>
                      <path fill="#9b62ff" d="M43.14 0H20.32v22.827h22.82z" />
                    </g>
                    <g>
                      <path
                        fill="#ff5262"
                        d="M20.18 15.46h13.21v7.375H20.18z"
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
                        d="M7.42 15.46v0h25.965v24.599H7.42v0z"
                      />
                    </g>
                    <g>
                      <path
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit={20}
                        strokeWidth={2}
                        d="M13.796 10.72v9.356"
                      />
                    </g>
                    <g>
                      <path
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit={20}
                        strokeWidth={2}
                        d="M26.666 10.72v9.356"
                      />
                    </g>
                    <g>
                      <path
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit={20}
                        strokeWidth={2}
                        d="M7.426 23.656H33.39"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
}
