export function UnionIcon() {
  return (
    <svg
      width="60px"
      height="60px"
      viewBox="0 0 60 60"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path d="M0 0L60 0L60 60L0 60L0 0Z" id="path_1" />
        <path d="M0 0L25 0L25 25L0 25L0 0Z" id="path_2" />
        <path
          d="M19 40C27.2843 40 34 33.2843 34 25C34 16.7157 27.2843 10 19 10C10.7157 10 4 16.7157 4 25C4 33.2843 10.7157 40 19 40Z"
          id="path_3"
        />
        <path
          d="M30 40C38.2843 40 45 33.2843 45 25C45 16.7157 38.2843 10 30 10C21.7157 10 15 16.7157 15 25C15 33.2843 21.7157 40 30 40Z"
          id="path_4"
        />
        <path d="M17.3125 31L31.5 31" id="path_5" />
        <path d="M16.125 25L32.875 25" id="path_6" />
        <path d="M17.3125 19L31.5 19" id="path_7" />
        <clipPath id="clip_1">
          <use href="#path_3" />
        </clipPath>
        <clipPath id="clip_2">
          <use href="#path_4" />
        </clipPath>
        <clipPath id="clip_3">
          <use href="#path_5" />
        </clipPath>
        <clipPath id="clip_4">
          <use href="#path_6" />
        </clipPath>
        <clipPath id="clip_5">
          <use href="#path_7" />
        </clipPath>
        <clipPath id="mask_1">
          <use href="#path_1" />
        </clipPath>
        <clipPath id="mask_2">
          <use href="#path_2" />
        </clipPath>
      </defs>
      <g id="Group-22">
        <path
          d="M0 0L60 0L60 60L0 60L0 0Z"
          id="Mask"
          fill="none"
          fillRule="evenodd"
          stroke="none"
        />
        <g clipPath="url(#mask_1)">
          <g id="Group-22">
            <g id="Group-2">
              <path
                d="M0 0L25 0L25 25L0 25L0 0Z"
                id="Rectangle"
                fill="#58ECCA"
                fillRule="evenodd"
                stroke="none"
              />
            </g>
            <g id="Group-16" transform="matrix(1 0 0 1 3.5527137E-15 0)">
              <g id="Oval-Copy-2">
                <path
                  d="M0 0L25 0L25 25L0 25L0 0Z"
                  id="Mask"
                  fill="#58ECCA"
                  fillRule="evenodd"
                  stroke="none"
                />
                <g clipPath="url(#mask_2)">
                  <path
                    d="M32 40C40.2843 40 47 33.2843 47 25C47 16.7157 40.2843 10 32 10C23.7157 10 17 16.7157 17 25C17 33.2843 23.7157 40 32 40Z"
                    id="Oval-Copy-2"
                    fill="#FF5262"
                    fillRule="evenodd"
                    stroke="none"
                  />
                </g>
              </g>
              <g id="Oval">
                <g clipPath="url(#clip_1)">
                  <use
                    href="#path_3"
                    fill="none"
                    stroke="#000000"
                    strokeWidth={4}
                  />
                </g>
              </g>
              <g id="Oval-Copy">
                <g clipPath="url(#clip_2)">
                  <use
                    href="#path_4"
                    fill="none"
                    stroke="#000000"
                    strokeWidth={4}
                  />
                </g>
              </g>
            </g>
            <g id="Line-3">
              <g clipPath="url(#clip_3)">
                <use
                  href="#path_5"
                  fill="none"
                  stroke="#000000"
                  strokeWidth={4}
                />
              </g>
            </g>
            <g id="Line-3-Copy">
              <g clipPath="url(#clip_4)">
                <use
                  href="#path_6"
                  fill="none"
                  stroke="#000000"
                  strokeWidth={4}
                />
              </g>
            </g>
            <g id="Line-3-Copy-2">
              <g clipPath="url(#clip_5)">
                <use
                  href="#path_7"
                  fill="none"
                  stroke="#000000"
                  strokeWidth={4}
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
