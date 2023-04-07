/* eslint-disable-next-line */
import styles from './quote-icon.module.scss';

export interface QuoteIconProps {
  fill?: 'primary' | 'secondary' | 'tertiary';
  opacity?: string;
}

QuoteIcon.defaultProps = {
  fill: 'primary',
  opacity: 0.25,
};
const translateFill = (fill: string | undefined) => {
  switch (fill) {
    case 'secondary':
      return '#FF5262';
    case 'tertiary':
      return '#58ECCA';
    default:
      return '#9B62FF';
  }
};

export function QuoteIcon(props: QuoteIconProps) {
  return (
    <div className={styles['block']}>
      <svg
        viewBox="0 0 156 139"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Group@3x</title>
        <g
          id="v2"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          opacity="0.25"
        >
          <g
            id="Homepage-v2---1366"
            transform="translate(-43.000000, -5769.000000)"
            fill={translateFill(props.fill)}
            fillRule="nonzero"
          >
            <g id="Group-63" transform="translate(43.000000, 5262.000000)">
              <g id="Group-61" transform="translate(0.000000, 439.494845)">
                <g id="Group" transform="translate(0.000000, 67.935302)">
                  <path
                    d="M37.8584071,138 C56.1769912,138 70.2212389,123.345133 70.2212389,105.637168 C70.2212389,87.3185841 58.0088496,74.4955752 40.9115044,74.4955752 C37.8584071,74.4955752 33.5840708,75.1061947 32.9734513,75.1061947 C34.8053097,55.5663717 52.5132743,31.1415929 72.0530973,18.3185841 L49.460177,0 C21.3716814,20.1504425 0,54.3451327 0,91.5929204 C0,121.513274 17.7079646,138 37.8584071,138 Z"
                    id="Path"
                  ></path>
                  <path
                    d="M121.207933,138 C139.526517,138 154.181385,123.345133 154.181385,105.637168 C154.181385,87.3185841 141.358376,74.4955752 124.261031,74.4955752 C121.207933,74.4955752 116.933597,75.1061947 116.322977,75.1061947 C118.765455,55.5663717 135.862801,31.1415929 155.402624,18.3185841 L132.809703,0 C104.721208,20.1504425 83.3495262,54.3451327 83.3495262,91.5929204 C83.3495262,121.513274 101.057491,138 121.207933,138 Z"
                    id="Path"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default QuoteIcon;
