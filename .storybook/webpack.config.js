const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// load the default config generator.

module.exports = ({ config }) => {
  // Extend it as you need.
  // For example, add typescript loader:
  config.module.rules.splice(1, 0, {
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
      },
      {
        loader: "linaria/loader",
        options: {
          sourceMap: process.env.NODE_ENV !== "production",
        },
      },
    ],
  });

  // config.module.rules.push({
  //   test: /\.css$/,
  //   use: [
  //     "css-hot-loader",
  //     // MiniCssExtractPlugin.loader,
  //     {
  //       loader: "css-loader",
  //       options: { sourceMap: true },
  //     },
  //   ],
  // });

  // config.plugins.push(new MiniCssExtractPlugin({ filename: "styles.css" }));

  config = {
    ...config,
    externals: {
      jsdom: "window",
      cheerio: "window",
      "react/lib/ExecutionEnvironment": true,
      "react/lib/ReactContext": "window",
      "react/addons": true,
    },
  };

  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.alias = {
    theme: path.resolve(__dirname, "../src/theme"),
  };

  return config;
};
