const babelConfig = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src/js"],
        alias: {
          project: "./",
        },
      },
    ],
    "@babel/plugin-proposal-export-default-from",
  ],
};

export default babelConfig;
