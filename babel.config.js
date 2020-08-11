module.exports = {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current",
          },
        },
      ],
    ],
    plugins: [
      "@babel/plugin-proposal-throw-expressions",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-private-methods",
    ],
  };
  