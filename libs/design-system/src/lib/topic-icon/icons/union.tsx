export function UnionIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={60}
      height={60}
      viewBox="0 0 60 60"
    >
      <defs>
        <clipPath id="clip-path">
          <rect width={60} height={60} fill="none" />
        </clipPath>
        <clipPath id="clip-path-2">
          <rect width={25} height={25} fill="#58ecca" />
        </clipPath>
      </defs>
      <rect width={60} height={60} fill="none" />
      <g clipPath="url(#clip-path)">
        <g>
          <g>
            <rect width={25} height={25} fill="#58ecca" />
          </g>
          <g transform="translate(0)">
            <g>
              <rect width={25} height={25} fill="#58ecca" />
              <g clipPath="url(#clip-path-2)">
                <circle
                  cx={15}
                  cy={15}
                  r={15}
                  transform="translate(17 10)"
                  fill="#ff5262"
                />
              </g>
            </g>
            <g
              transform="translate(4 10)"
              fill="none"
              stroke="#000"
              strokeMiterlimit={10}
              strokeWidth={2}
            >
              <circle cx={15} cy={15} r={15} stroke="none" />
              <circle cx={15} cy={15} r={14} fill="none" />
            </g>
            <g
              transform="translate(15 10)"
              fill="none"
              stroke="#000"
              strokeMiterlimit={10}
              strokeWidth={2}
            >
              <circle cx={15} cy={15} r={15} stroke="none" />
              <circle cx={15} cy={15} r={14} fill="none" />
            </g>
          </g>
          <path
            d="M0,.5H14.188"
            transform="translate(17.313 30.5)"
            fill="none"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
          <path
            d="M0,.5H16.75"
            transform="translate(16.125 24.5)"
            fill="none"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
          <path
            d="M0,.5H14.188"
            transform="translate(17.313 18.5)"
            fill="none"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
        </g>
      </g>
    </svg>
  );
}
