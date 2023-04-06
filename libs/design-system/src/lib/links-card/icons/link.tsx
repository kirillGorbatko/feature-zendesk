import styles from '../links-card.module.scss';
import classNames from 'classnames';

export function Link() {
  return (
    <>
      <svg
        className={classNames(styles['icon'], styles['icon--desktop_mod'])}
        viewBox="0 0 57 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_16008_5"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={57}
          height={46}
        >
          <path d="M0 0H57V46H0V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_16008_5)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H25V25H0V0Z"
            fill="#9B62FF"
          />
          <path
            d="M12 22C12 18.6863 14.6863 16 18 16H25V25H12V22Z"
            fill="#FF6775"
          />
          <path d="M20.9052 23.9913H37.1424" stroke="black" strokeWidth={2} />
          <path
            d="M25.0244 32.6875H20.0245C15.2221 32.6875 11.3274 28.7941 11.3274 23.9916C11.3274 19.1879 15.2221 15.2945 20.0245 15.2945H25.0244"
            stroke="black"
            strokeWidth={2}
          />
          <path
            d="M33.0231 32.6875H38.0243C42.8267 32.6875 46.7201 28.7941 46.7201 23.9916C46.7201 19.1879 42.8267 15.2945 38.0243 15.2945H33.0231"
            stroke="black"
            strokeWidth={2}
          />
        </g>
      </svg>
      <svg
        className={classNames(styles['icon'], styles['icon--mobile_mod'])}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_16024_18)">
          <mask
            id="mask0_16024_18"
            style={{ maskType: 'luminance' }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={50}
            height={50}
          >
            <path d="M0 0H50V50H0V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_16024_18)">
            <path
              d="M1.59998 0.0499878H26.6V25H1.59998V0.0499878Z"
              fill="#9B62FF"
            />
            <path
              d="M26.6211 25H21.524C16.2657 25 16.5 25 12.5 25C12.5 22.5139 16.2657 16 21.524 16H26.6211"
              fill="#FF6775"
            />
            <path
              d="M22.5099 24H38.7469"
              stroke="black"
              strokeWidth={2}
              strokeMiterlimit={20}
            />
            <path
              d="M26.6269 32.743H21.6269C16.8249 32.743 12.9299 28.85 12.9299 24C12.9299 19.243 16.8249 15.35 21.6269 15.35H26.6269"
              stroke="black"
              strokeWidth={2}
              strokeMiterlimit={20}
            />
            <path
              d="M34.6199 32.743H39.6209C44.4239 32.743 48.3169 28.85 48.3169 24C48.3169 19.243 44.4239 15.35 39.6209 15.35H34.6199"
              stroke="black"
              strokeWidth={2}
              strokeMiterlimit={20}
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_16024_18">
            <rect width={50} height={50} />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
