export function WrenchIcon() {
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
        <clipPath id="mask_1">
          <use href="#path_1" />
        </clipPath>
        <clipPath id="mask_2">
          <use href="#path_2" />
        </clipPath>
      </defs>
      <g id="Group-23">
        <path
          d="M0 0L60 0L60 60L0 60L0 0Z"
          id="Mask"
          fill="none"
          fillRule="evenodd"
          stroke="none"
        />
        <g clipPath="url(#mask_1)">
          <g id="Group-23">
            <g id="Stroke-1">
              <path
                d="M0 0L25 0L25 25L0 25L0 0Z"
                id="Mask"
                fill="currentColor"
                fillRule="evenodd"
                stroke="none"
              />
              <g clipPath="url(#mask_2)">
                <path
                  d="M38.1808 28.6944C41.1568 25.7185 41.9615 21.4028 40.6175 17.6902L35.6091 22.6986C33.874 24.4337 31.062 24.4342 29.3264 22.6986C27.5918 20.964 27.5913 18.1509 29.3264 16.4159L34.3348 11.4075C30.6227 10.064 26.3075 10.8693 23.3316 13.8452C20.3546 16.8221 19.5504 21.1363 20.8939 24.8483L10.5749 35.1674C8.83977 36.9025 8.84029 39.7155 10.5749 41.4501C12.3105 43.1857 15.1225 43.1852 16.8576 41.4501L27.1766 31.1311C30.8892 32.4751 35.2039 31.6714 38.1808 28.6944Z"
                  id="Stroke-1"
                  fill="#9B62FF"
                  fillRule="evenodd"
                  stroke="none"
                />
              </g>
            </g>
            <path
              d="M37.1808 28.6944C40.1568 25.7185 40.9615 21.4028 39.6175 17.6902L34.6091 22.6986C32.874 24.4337 30.062 24.4342 28.3264 22.6986C26.5918 20.964 26.5913 18.1509 28.3264 16.4159L33.3348 11.4075C29.6227 10.064 25.3075 10.8693 22.3316 13.8452C19.3546 16.8221 18.5504 21.1363 19.8939 24.8483L9.57485 35.1674C7.83977 36.9025 7.8403 39.7156 9.57485 41.4501C11.3105 43.1857 14.1225 43.1852 15.8576 41.4501L26.1766 31.1311C29.8892 32.4751 34.2039 31.6714 37.1808 28.6944Z"
              id="Stroke-1"
              fill="none"
              fillRule="evenodd"
              stroke="#1D1D1B"
              strokeWidth={2}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
