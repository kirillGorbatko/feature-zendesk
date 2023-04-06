import styles from '../links-card.module.scss';
import classNames from 'classnames';

export function Artist() {
  return (
    <>
      <svg
        className={classNames(styles['icon'], styles['icon--desktop_mod'])}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 57 46"
      >
        <defs>
          <clipPath id="3b6ma">
            <path d="M0 0h57v46H0z" />
          </clipPath>
        </defs>
        <g>
          <g>
            <g />
            <g clipPath="url(#3b6ma)">
              <g>
                <g>
                  <path fill="#58ecca" d="M25.138 0H-.43v25.568h25.568z" />
                </g>
                <g>
                  <path fill="#9b62ff" d="M14.57 13.3h10.994v12.273H14.57z" />
                </g>
              </g>
              <g>
                <g>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={20}
                    strokeWidth={2}
                    d="M34.557 28.145a4.928 4.928 0 1 0 0-9.855 4.928 4.928 0 0 0 0 9.855z"
                  />
                </g>
                <g>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={20}
                    strokeWidth={2}
                    d="M47.524 45c0-7.164-5.805-13-12.967-13-7.161 0-12.967 5.836-12.967 13"
                  />
                </g>
                <g>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={20}
                    strokeWidth={2}
                    d="M13.81 13.3v0h41.495v31.25H13.81v0z"
                  />
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
          <clipPath id="3jgea">
            <path d="M0 0h50v50H0z" />
          </clipPath>
        </defs>
        <g>
          <g>
            <g />
            <g clipPath="url(#3jgea)">
              <g>
                <g>
                  <path fill="#58ecca" d="M24.217.55H1.49v22.727h22.727z" />
                </g>
                <g>
                  <path fill="#9b62ff" d="M15 10.09h8.65v13.195H15z" />
                </g>
              </g>
              <g>
                <g>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={20}
                    strokeWidth={2}
                    d="M31.64 25.57c2.419 0 4.36-1.961 4.36-4.38a4.363 4.363 0 0 0-4.36-4.38 4.38 4.38 0 1 0 0 8.76z"
                  />
                </g>
                <g>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={20}
                    strokeWidth={2}
                    d="M43.163 40.556C43.163 34.191 38 29 31.636 29 25.27 29 20.11 34.19 20.11 40.556"
                  />
                </g>
                <g>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={20}
                    strokeWidth={2}
                    d="M15.48 10.09v0h32.313v30.064H15.48v0z"
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
