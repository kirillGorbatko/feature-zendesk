// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

const isProd = process.env.NODE_ENV === 'production';

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  assetPrefix: isProd
    ? process.env.NEXT_PUBLIC_FFM_CDN || process.env.FFM_CDN || ''
    : undefined,
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        {
          source: `/img/v(\\d{1,})/:path*`,
          destination: '/img/:path*',
        },
      ],
    };
  },
};

module.exports = withNx(nextConfig);
