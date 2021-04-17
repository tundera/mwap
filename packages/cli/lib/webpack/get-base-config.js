const path = require("path");
const webpack = require("webpack");

const { ESBuildMinifyPlugin } = require("esbuild-loader");

const findAllNodeModules = require("../utils/find-all-node-modules");
// const readPackageJson = require("../utils/react-package-json");
const resolveEntry = require("../utils/resolve-entry");
const resolveTsconfig = require("../utils/resolve-tsconfig");
const tryResolveOptionalLoader = require("../utils/try-resolve-optional-loader");

/**
 * @returns {Promise<import("webpack").Configuration>}
 */
async function getBaseConfig({ cwd, mode }) {
  const isProd = mode !== "development";

  const [
    // pkg,
    userNodeModules,
    cliNodeModules,
    tsconfig,
    mwapApp,
    mwapPages,
  ] = await Promise.all([
    // readPackageJson(cwd),
    findAllNodeModules(cwd),
    findAllNodeModules(__dirname),
    resolveTsconfig(cwd, isProd),
    resolveEntry(path.resolve(cwd, "app")).then(
      (r) => r || path.resolve(__dirname, "../../runtime/passthrough-app")
    ),
    resolveEntry(path.resolve(cwd, "pages/index")),
  ]);

  const nodeModules = Array.from(
    new Set([...userNodeModules, ...cliNodeModules])
  );

  const tsconfigRaw = tsconfig ? require(tsconfig) : undefined;

  return {
    mode: isProd ? "production" : "development",
    devtool: isProd ? "source-map" : "inline-source-map",
    context: path.resolve(cwd),
    resolve: {
      modules: [...nodeModules, "node_modules"],
      extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".json", ".css"],
      alias: {
        "mwap-app": mwapApp,
        "mwap-pages": mwapPages,
      },
    },
    resolveLoader: {
      modules: [...nodeModules],
      alias: {
        "proxy-loader": require.resolve("./proxy-loader"),
      },
    },
    optimization: {
      minimize: isProd,
      minimizer: [
        new ESBuildMinifyPlugin({
          target: "es2015",
          css: true,
        }),
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(isProd ? "production" : "development"),
        },
      }),
    ],
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.ts$/,
          resolve: { mainFields: ["module", "jsnext:main", "browser", "main"] },
          type: "javascript/auto",
          loader: require.resolve("esbuild-loader"),
          options: {
            loader: "ts",
            target: "es2015",
            tsconfigRaw,
          },
        },
        {
          enforce: "pre",
          test: /\.tsx$/,
          resolve: { mainFields: ["module", "jsnext:main", "browser", "main"] },
          type: "javascript/auto",
          loader: require.resolve("esbuild-loader"),
          options: {
            loader: "tsx",
            target: "es2015",
            tsconfigRaw,
          },
        },
        {
          enforce: "pre",
          test: /\.m?js?$/,
          resolve: { mainFields: ["module", "jsnext:main", "browser", "main"] },
          type: "javascript/auto",
          loader: require.resolve("esbuild-loader"),
          options: {
            loader: "js",
            target: "es2015",
          },
        },
        {
          enforce: "pre",
          test: /\.jsx?$/,
          resolve: { mainFields: ["module", "jsnext:main", "browser", "main"] },
          type: "javascript/auto",
          loader: require.resolve("esbuild-loader"),
          options: {
            loader: "jsx",
            target: "es2015",
          },
        },
      ],
    },
  };
}

module.exports = getBaseConfig;
