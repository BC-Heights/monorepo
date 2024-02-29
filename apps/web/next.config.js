//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { withAxiom } = require('next-axiom');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = withAxiom({
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.bcheights.com',
        port: '',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'heights-photos.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/e-edition-2', destination: '/e-edition', permanent: true },
      { source: '/features-2', destination: '/magazine', permanent: true },
      { source: '/academics', destination: '/news/academics', permanent: true },
      {
        source: '/administration',
        destination: '/news/administration',
        permanent: true,
      },
      { source: '/on-campus', destination: '/news/on-campus', permanent: true },
      {
        source: '/off-campus-news',
        destination: '/news/off-campus',
        permanent: true,
      },
      { source: '/fall', destination: '/sports/fall', permanent: true },
      { source: '/winter', destination: '/sports/winter', permanent: true },
      { source: '/spring', destination: '/sports/spring', permanent: true },
      {
        source: '/athletics-news',
        destination: '/sports/athletics-news',
        permanent: true,
      },
      { source: '/football', destination: '/sports/football', permanent: true },
      {
        source: '/sports-column',
        destination: '/sports/column',
        permanent: true,
      },
      { source: '/hockey', destination: '/sports/hockey', permanent: true },
      {
        source: '/basketball',
        destination: '/sports/basketball',
        permanent: true,
      },
      { source: '/baseball', destination: '/sports/baseball', permanent: true },
      { source: '/soccer', destination: '/sports/soccer', permanent: true },
      { source: '/lacrosse', destination: '/sports/lacrosse', permanent: true },
      { source: '/tennis', destination: '/sports/tennis', permanent: true },
      {
        source: '/volleyball',
        destination: '/sports/volleyball',
        permanent: true,
      },
      {
        source: '/field-hockey',
        destination: '/sports/field-hockey',
        permanent: true,
      },
      {
        source: '/on-campus-arts',
        destination: '/arts/on-campus',
        permanent: true,
      },
      {
        source: '/off-campus-arts',
        destination: '/arts/off-campus',
        permanent: true,
      },
      {
        source: '/arts-features',
        destination: '/arts/features',
        permanent: true,
      },
      { source: '/music', destination: '/arts/music', permanent: true },
      {
        source: '/television',
        destination: '/arts/television',
        permanent: true,
      },
      { source: '/movies', destination: '/arts/movies', permanent: true },
      { source: '/books', destination: '/arts/books', permanent: true },
      { source: '/arts-column', destination: '/arts/column', permanent: true },
      { source: '/iedit', destination: '/arts/iedit', permanent: true },
      {
        source: '/editorials',
        destination: '/opinions/editorials',
        permanent: true,
      },
      { source: '/columns', destination: '/opinions/columns', permanent: true },
      {
        source: '/letters-to-the-editor',
        destination: '/opinions/letters-to-the-editor',
        permanent: true,
      },
      {
        source: '/letter-from-the-editor',
        destination: '/opinions/letter-from-the-editor',
        permanent: true,
      },
      { source: '/op-ed', destination: '/opinions/op-ed', permanent: true },
      {
        source: '/thumbs-up-thumbs-down',
        destination: '/opinions/thumbs-up-thumbs-down',
        permanent: true,
      },
      { source: '/metro', destination: '/newton', permanent: true },
      {
        source: '/city-arts',
        destination: '/newton/city-arts',
        permanent: true,
      },
      { source: '/business', destination: '/newton/business', permanent: true },
      { source: '/food', destination: '/newton/food', permanent: true },
      {
        source: '/metro-features',
        destination: '/newton/features',
        permanent: true,
      },
      {
        source: '/city-columns',
        destination: '/newton/columns',
        permanent: true,
      },
      { source: '/politics', destination: '/newton/politics', permanent: true },
      {
        source: '/newton-overide-election',
        destination: '/newton/override-election',
        permanent: true,
      },
    ];
  },
});

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
