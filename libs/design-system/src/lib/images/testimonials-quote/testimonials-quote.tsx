/* eslint-disable-next-line */
export interface TestimonialsQuoteProps {
  fill?: 'primary' | 'secondary' | 'tertiary';
  opacity?: string
}

TestimonialsQuote.defaultProps = {
  fill: 'primary',
  opacity: 0.25
}
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

export function TestimonialsQuote(props: TestimonialsQuoteProps) {
  return (
    <>
      <div className="tablet:hidden">
        <svg width="54px" height="40px" viewBox="0 0 54 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <title>Group 20@3x</title>
          <g id="V2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity={props.opacity}>
            <g id="Mobile-homepage-v4" transform="translate(-31.000000, -7598.000000)" fill={translateFill(props.fill)} fillRule="nonzero">
              <g id="Group-52" transform="translate(0.000000, 879.000000)">
                <g id="Group-68" transform="translate(0.000000, 6253.000000)">
                  <g id="Group-20" transform="translate(31.000000, 466.000000)">
                    <path d="M54,27.953668 C54,21.4671815 49.3714286,16.3706564 42.12,16.3706564 C40.8857143,16.3706564 39.3428571,16.8339768 39.0342857,17.1428571 C39.3428571,14.8262548 40.4228571,12.3552124 42.7371429,10.6563707 C44.8971429,8.8030888 48.4457143,7.56756757 53.3828571,7.56756757 L53.3828571,0 C37.8,0.154440154 28.8514286,6.64092664 28.8514286,24.7104247 C28.8514286,33.8223938 34.0971429,40 42.12,40 C48.7542857,40 54,34.5945946 54,27.953668 Z" id="Path" />
                    <path d="M25.1485714,27.953668 C25.1485714,21.4671815 20.52,16.3706564 13.2685714,16.3706564 C12.0342857,16.3706564 10.4914286,16.8339768 10.1828571,17.1428571 C10.4914286,14.8262548 11.5714286,12.3552124 13.8857143,10.6563707 C16.0457143,8.8030888 19.5942857,7.56756757 24.5314286,7.56756757 L24.5314286,0 C8.94857143,0.154440154 0,6.64092664 0,24.7104247 C0,33.8223938 5.24571429,40 13.2685714,40 C19.9028571,40 25.1485714,34.5945946 25.1485714,27.953668 Z" id="Path" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="hidden tablet:block w-full">
        <svg viewBox="0 0 156 139" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
    </>
  );
}

export default TestimonialsQuote;
