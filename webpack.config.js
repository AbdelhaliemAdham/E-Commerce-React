module.exports = {
  // ...existing config...
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
