export function BulbIcon() {
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
      <g id="Group">
        <path
          d="M0 0L60 0L60 60L0 60L0 0Z"
          id="Mask"
          fill="none"
          fillRule="evenodd"
          stroke="none"
        />
        <g clipPath="url(#mask_1)">
          <g id="icon">
            <g id="Stroke-1-Copy-2">
              <path
                d="M0 0L25 0L25 25L0 25L0 0Z"
                id="Mask"
                fill="currentColor"
                fillRule="evenodd"
                stroke="none"
              />
              <g clipPath="url(#mask_2)">
                <path
                  d="M27.9561 38.6588L27.9561 37.4894C27.9561 35.1989 28.8718 32.9735 30.5814 31.4507C32.8102 29.4654 34.2146 26.5779 34.2146 23.3581C34.2146 17.2112 29.1068 12.2572 22.904 12.5092C17.25 12.7392 12.6182 17.4707 12.5024 23.1299C12.4356 26.353 13.7774 29.2599 15.953 31.2858C17.6905 32.905 18.7584 35.116 18.7584 37.492L18.7584 38.6588L18.7584 41.0753C18.7584 41.8625 19.3968 42.5 20.184 42.5L26.5313 42.5C27.3177 42.5 27.9561 41.8625 27.9561 41.0753L27.9561 38.6588Z"
                  id="Stroke-1-Copy-2"
                  fill="#58ECCA"
                  fillRule="evenodd"
                  stroke="none"
                />
              </g>
            </g>
            <path
              d="M27.9561 38.6588L27.9561 37.4894C27.9561 35.1989 28.8718 32.9735 30.5814 31.4507C32.8102 29.4654 34.2146 26.5779 34.2146 23.3581C34.2146 17.2112 29.1068 12.2572 22.904 12.5092C17.25 12.7392 12.6182 17.4707 12.5024 23.1299C12.4356 26.353 13.7774 29.2599 15.953 31.2858C17.6905 32.905 18.7584 35.116 18.7584 37.492L18.7584 38.6588L18.7584 41.0753C18.7584 41.8625 19.3968 42.5 20.184 42.5L26.5313 42.5C27.3177 42.5 27.9561 41.8625 27.9561 41.0753L27.9561 38.6588Z"
              id="Stroke-1"
              fill="none"
              fillRule="evenodd"
              stroke="#1D1D1B"
              strokeWidth={2}
            />
            <path
              d="M18.7585 37.4821L27.9561 37.4821"
              id="Stroke-3"
              fill="none"
              fillRule="evenodd"
              stroke="#1D1D1B"
              strokeWidth={2}
            />
            <path
              d="M31.6426 10.8596L35.9731 6.16041"
              id="Path-3"
              fill="none"
              fillRule="evenodd"
              stroke="#000000"
              strokeWidth={2}
            />
            <path
              d="M36.4287 16.7734L42.1606 14.0979"
              id="Path-3-Copy-2"
              fill="none"
              fillRule="evenodd"
              stroke="#000000"
              strokeWidth={2}
            />
            <path
              d="M38.7676 23.6096L44.6963 23.6096"
              id="Path-3-Copy"
              fill="none"
              fillRule="evenodd"
              stroke="#000000"
              strokeWidth={2}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
