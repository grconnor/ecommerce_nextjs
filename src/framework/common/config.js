const fs = require("fs");
const path = require("path");
const merge = require("deepmerge");
const prettier = require("prettier");

const allowedFrameworks = ["shopify", "bigcommerce", "shopify_local"];
const fallbackFramework = allowedFrameworks[0];

async function withFrameworkConfig(defaultConfig = {}) {
  let framework = defaultConfig?.framework?.name;

  if (!framework) {
    throw new Error(
      "The API framework is missing, please add a vaid provider!"
    );
  }

  if (!allowedFrameworks.includes(framework)) {
    throw new Error(
      `The api framework: '${framework}' cannot be found, please use one of the following: ${allowedFrameworks.join(
        ", "
      )}.`
    );
  }

  if (framework === "shopify_local") {
    framework = fallbackFramework;
  }

  const frameworkNextConfig = require(
    path.join("../", framework, "next.config")
  );
  const config = merge(defaultConfig, frameworkNextConfig);

  const tsPath = path.join(process.cwd(), "tsconfig.json");
  const tsConfig = require(tsPath);

  tsConfig.compilerOptions.paths["@framework/*"] = [`framework/${framework}/*`];

  // fs.writeFileSync(
  //   tsPath,
  //   await prettier.format(JSON.stringify(tsConfig), { parser: "json" })
  // );

  try {
    const formattedTsConfig = await prettier.format(JSON.stringify(tsConfig), {
      parser: "json",
    });
    fs.writeFileSync(tsPath, formattedTsConfig);
  } catch (error) {
    console.error("Error writing to file: ", error);
  }

  return config;
}

module.exports = { withFrameworkConfig };
