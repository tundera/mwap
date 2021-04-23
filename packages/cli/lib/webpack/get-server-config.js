const path = require("path");

const WebpackBar = require("webpackbar");

const applyUserConfig = require("../utils/apply-user-config");
const findAllNodeModules = require("../utils/find-all-node-modules");
const getSassConfiguration = require("../utils/get-sass-options");
const getWebpackCacheConfigFiles = require("../utils/get-webpack-cache-config-files");
const getBaseConfig = require("./get-base-config");
const resolveEntry = require("../utils/resolve-entry");
const tryResolveOptionalLoader = require("../utils/try-resolve-optional-loader");

/**
 * @param {import("@mwap/types").BuildArgs} args
 * @returns {Promise<import("webpack").Configuration>}
 */
async function getServerConfig(args) {
  const isProd = args.mode !== "development";

  const [
    userNodeModules,
    config,
    mwapDocument,
    mwapLoaders,
  ] = await Promise.all([
    findAllNodeModules(args.cwd),
    getBaseConfig(args),
    resolveEntry(path.resolve(args.cwd, "document")).then(
      (r) => r || path.resolve(__dirname, "../../runtime/document")
    ),
    resolveEntry(path.resolve(args.cwd, "loaders/index")).then(
      (r) => r || path.resolve(__dirname, "../../runtime/empty-loaders")
    ),
  ]);

  config.target = "node";
  config.output = {
    library: { type: "commonjs" },
    path: path.resolve(args.cwd, args.dist, "server"),
  };

  config.resolve.alias["mwap-document"] = mwapDocument;
  config.resolve.alias["mwap-loaders"] = mwapLoaders;

  config.externals = {
    express: "commonjs express",
  };

  config.entry = [args.entry || "@mwap/express"];

  config.module.rules.push({
    enforce: "pre",
    test: /\.s[ac]ss$/,
    use: [
      {
        loader: require.resolve("./proxy-loader"),
        options: {
          cwd: args.cwd,
          loader: tryResolveOptionalLoader("sass-loader"),
          options: getSassConfiguration(...userNodeModules),
        },
      },
    ],
  });

  config.module.rules.push({
    include: /\.module\.(p?css|s[ac]ss)$/,
    use: [
      {
        loader: "css-loader",
        options: {
          modules: {
            exportOnlyLocals: true,
            localIdentName: "[local]__[hash:base64:5]",
          },
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.(p?css|s[ac]ss)$/,
    exclude: [/\.module\.(p?css|s[ac]ss)$/],
    loader: "null-loader",
  });

  config.plugins.push(
    new WebpackBar({
      color: "green",
      name: "server",
      reporters: ["fancy"],
    })
  );

  if (isProd) {
    const configFiles = await getWebpackCacheConfigFiles(args.cwd);
    config.cache = {
      name: "server",
      type: "filesystem",
      buildDependencies: {
        config: ["@mwap/cli/lib/webpack/get-server-config.js", ...configFiles],
      },
    };
  }

  await applyUserConfig(Object.assign({}, args, { isServer: true }), config);

  return config;
}

module.exports = getServerConfig;
