/** @type {import('next').NextConfig} */
const { withFrameworkConfig } = require("./src/framework/common/config");

async function getNextConfig() {
  const nextConfig = await withFrameworkConfig({
    framework: {
      name: "shopify_local",
    },
    reactStrictMode: true,
    i18n: {
      locales: ["en-US"],
      defaultLocale: "en-US",
    },
  });

  return nextConfig;
}

module.exports = async () => {
  const config = await getNextConfig();
  console.log("Next.config.js: ", JSON.stringify(config, null, 2));
  return config;
};
