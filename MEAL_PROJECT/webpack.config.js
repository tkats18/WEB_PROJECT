const ImageminPlugin = require("imagemin-webpack-plugin").default;
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./js/menu.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "bundleJs"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(
            __dirname,
            "C:/Users/Tato/Desktop/WEB_FINAL/WEB_PROJECT/MEAL_PROJECT/data/photoes/"
          ),
          to: path.resolve(
            __dirname,
            "C:/Users/Tato/Desktop/WEB_FINAL/WEB_PROJECT/MEAL_PROJECT/data/processedPhotoes/"
          ),
        },
      ],
    }),
    new ImageminPlugin(),
  ],
};
