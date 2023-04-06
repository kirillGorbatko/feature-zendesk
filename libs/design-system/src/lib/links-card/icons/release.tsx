import styles from '../links-card.module.scss';
import classNames from 'classnames';

export function Release() {
  return (
    <>
      <svg
        className={classNames(styles['icon'], styles['icon--desktop_mod'])}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 57 46"
      >
        <defs>
          <clipPath id="7dyxa">
            <path d="M0 0h57v46H0z" />
          </clipPath>
        </defs>
        <g>
          <g>
            <g />
            <g clipPath="url(#7dyxa)">
              <g>
                <g>
                  <path fill="#58ecca" d="M0 0h25v25H0z" />
                </g>
                <g>
                  <path fill="#9b62ff" d="M25 25V11l-11 1.705V25z" />
                </g>
              </g>
              <g>
                <g>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={20}
                    strokeWidth={2}
                    d="M8.575 43a5.735 5.735 0 1 0 0-11.47 5.735 5.735 0 0 0 0 11.47z"
                  />
                </g>
                <g>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={20}
                    strokeWidth={2}
                    d="M27.425 38.08a5.735 5.735 0 1 0 0-11.47 5.735 5.735 0 0 0 0 11.47z"
                  />
                </g>
                <g>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={20}
                    strokeWidth={2}
                    d="M14.31 38.084v0-24.373 0L33.153 9v23.759"
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
          <clipPath id="1n8aa">
            <path d="M0 0h50v50H0z" />
          </clipPath>
        </defs>
        <g>
          <g>
            <g />
            <g clipPath="url(#1n8aa)">
              <g>
                <g>
                  <path fill="#58ecca" d="M10 0h23.256v23.256H10z" />
                </g>
                <g>
                  <path
                    fill="#9b62ff"
                    d="M33.253 23.253V10.23L23 11.816v11.437z"
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
                    d="M18 40c2.921 0 5.31-2.389 5.31-5.335 0-2.947-2.389-5.335-5.31-5.335-3 0-5.36 2.388-5.36 5.335A5.323 5.323 0 0 0 18 40z"
                  />
                </g>
                <g>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={20}
                    strokeWidth={2}
                    d="M35.505 35.43c2.946 0 5.335-2.43 5.335-5.335a5.335 5.335 0 0 0-10.67 0c0 2.905 2.388 5.335 5.335 5.335z"
                  />
                </g>
                <g>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={20}
                    strokeWidth={2}
                    d="M23.31 35.425v0-22.673 0L40.839 8.37v22.101"
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
