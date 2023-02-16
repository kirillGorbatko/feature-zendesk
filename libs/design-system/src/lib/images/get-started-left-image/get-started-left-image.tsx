/* eslint-disable-next-line */
export interface GetStartedLeftImageProps {
  darkLayout?: boolean
}

export function GetStartedLeftImage(props: GetStartedLeftImageProps) {
  return (
    <svg
      width="228px"
      height="227px"
      viewBox="0 0 228 227"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Group 60@3x</title>
      <g id="v2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="Homepage-v2---1366"
          transform="translate(0.000000, -7398.000000)"
        >
          <g id="Group-68" transform="translate(0.083333, 7146.500000)">
            <g id="Group-60" transform="translate(0.000000, 251.500000)">
              <rect
                id="Rectangle-Copy-12"
                stroke="#9B62FF"
                strokeWidth="2"
                fill="#9B62FF"
                x="151.0625"
                y="151"
                width="75"
                height="75"
              ></rect>
              <rect
                id="Rectangle-Copy-11"
                fill={props.darkLayout ? "#ffffff" : "#000000"}
                x="0"
                y="0"
                width="150"
                height="150"
              ></rect>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default GetStartedLeftImage;
