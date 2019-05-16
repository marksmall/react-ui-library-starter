import resolve from "rollup-plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import babel from "rollup-plugin-babel";
// import commonjs from "rollup-plugin-commonjs";

import pkg from "./package.json";

export default [
  // browser-friendly UMD build
  {
    input: "src/index.js",
    output: {
      name: "uilibrary",
      file: pkg.browser,
      format: "umd"
    },
    external: ["react", "react-dom", "prop-types"],
    plugins: [
      resolve({ mainFields: ["module", "main"] }), // so Rollup can find `ms`
      postcss({
        modules: true
      }),
      babel({
        exclude: "node_modules/**"
      })
      // commonjs() // so Rollup can convert `ms` to an ES module
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "src/index.js",
    external: ["ms"],
    output: [
      // { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ],
    external: ["react", "react-dom", "prop-types"],
    plugins: [
      resolve({ mainFields: ["module", "main"] }), // so Rollup can find `ms`
      postcss({
        modules: true
      }),
      babel({
        exclude: "node_modules/**"
      })
      // commonjs() // so Rollup can convert `ms` to an ES module
    ]
  }
];
