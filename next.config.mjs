/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */

  experimental: {
    scrollRestoration: true,
    appDir: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ["cdn.builder.io"],
  },

  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
};
export default config;
