import styles from '../links-card.module.scss';
import classNames from 'classnames';

export function Tour() {
  return (
    <>
      <svg
        className={classNames(styles['icon'], styles['icon--desktop_mod'])}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 57 46"
      >
        <defs>
          <clipPath id="qme4a">
            <path d="M0 0h57v46H0z" />
          </clipPath>
          <clipPath id="qme4b">
            <path d="M25 0H0v25h25z" />
          </clipPath>
        </defs>
        <g>
          <g>
            <g />
            <g clipPath="url(#qme4a)">
              <g>
                <g>
                  <path fill="#58ecca" d="M25 0H0v25h25z" />
                </g>
                <g clipPath="url(#qme4b)">
                  <path
                    fill="#ff6775"
                    d="M13 12.5h6.652c0 2.5 1.995 4.5 4.455 4.5s4.455-2 4.455-4.5h6.17V43h-6.17a4.455 4.455 0 0 0-8.91 0H13z"
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
                    d="M12 12.5v0h6.682c0 2.5 1.995 4.5 4.455 4.5s4.455-2 4.455-4.5h6.17V43h-6.17a4.455 4.455 0 0 0-8.91 0H12v0z"
                  />
                </g>
                <g>
                  <g>
                    <path
                      fill="none"
                      stroke="#000"
                      strokeMiterlimit={20}
                      strokeWidth={2}
                      d="M12 32.5h4"
                    />
                  </g>
                  <g>
                    <path
                      fill="none"
                      stroke="#000"
                      strokeMiterlimit={20}
                      strokeWidth={2}
                      d="M18.25 32.5h3.963"
                    />
                  </g>
                  <g>
                    <path
                      fill="none"
                      stroke="#000"
                      strokeMiterlimit={20}
                      strokeWidth={2}
                      d="M24.48 32.5h3.963"
                    />
                  </g>
                  <g>
                    <path
                      fill="none"
                      stroke="#000"
                      strokeMiterlimit={20}
                      strokeWidth={2}
                      d="M30.73 32.5h3.031"
                    />
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
          <clipPath id="i1s9a">
            <path d="M0 0h50v50H0z" />
          </clipPath>
          <clipPath id="i1s9b">
            <path d="M33 0H8v25h25z" />
          </clipPath>
        </defs>
        <g>
          <g>
            <g />
            <g clipPath="url(#i1s9a)">
              <g>
                <g>
                  <path fill="#58ecca" d="M33 0H8v25h25z" />
                </g>
                <g clipPath="url(#i1s9b)">
                  <path
                    fill="#ff5262"
                    d="M21 12.5h6.652c0 2.5 1.995 4.5 4.455 4.5s4.455-2 4.455-4.5h6.17V43h-6.17a4.455 4.455 0 0 0-8.91 0H21z"
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
                    d="M20 12.5v0h6.682c0 2.5 1.995 4.5 4.455 4.5s4.455-2 4.455-4.5h6.17V43h-6.17a4.455 4.455 0 0 0-8.91 0H20v0z"
                  />
                </g>
                <g>
                  <g>
                    <path
                      fill="none"
                      stroke="#000"
                      strokeMiterlimit={20}
                      strokeWidth={2}
                      d="M20 32.5h4"
                    />
                  </g>
                  <g>
                    <path
                      fill="none"
                      stroke="#000"
                      strokeMiterlimit={20}
                      strokeWidth={2}
                      d="M26.25 32.5h3.963"
                    />
                  </g>
                  <g>
                    <path
                      fill="none"
                      stroke="#000"
                      strokeMiterlimit={20}
                      strokeWidth={2}
                      d="M32.48 32.5h3.963"
                    />
                  </g>
                  <g>
                    <path
                      fill="none"
                      stroke="#000"
                      strokeMiterlimit={20}
                      strokeWidth={2}
                      d="M38.73 32.5h3.031"
                    />
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
