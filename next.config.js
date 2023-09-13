/** @type {import('next').NextConfig} */
const { withFrameworkConfig } = require("./src/framework/common/config");

const nextConfig = withFrameworkConfig({
  reactStrictMode: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
});

module.exports = nextConfig;

console.log("next.config.js", JSON.stringify(module.exports, null, 2));