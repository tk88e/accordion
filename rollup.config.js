import pluginNodeResolve from "@rollup/plugin-node-resolve";
import pluginCommonjs from "@rollup/plugin-commonjs";
import pluginTypescript from "@rollup/plugin-typescript";
import { babel as pluginBabel } from "@rollup/plugin-babel";
import { terser as pluginTerser } from "rollup-plugin-terser";

import * as path from "path";
import pkg from "./package.json";

const moduleName = pkg.name;

export default [
  // for Browser
  {
    input: "src/index.ts",
    output: [
      {
        name: moduleName,
        file: pkg.browser,
        format: "iife",
        sourcemap: "inline",
      },
      {
        name: moduleName,
        file: pkg.browser.replace(".js", ".min.js"),
        format: "iife",
        plugins: [pluginTerser()],
      },
    ],
    plugins: [
      pluginTypescript(),
      pluginCommonjs({
        extensions: [".js", ".ts"],
      }),
      pluginBabel({
        babelHelpers: "bundled",
        configFile: path.resolve(__dirname, ".babelrc.js"),
      }),
      pluginNodeResolve({
        browser: true,
      }),
    ],
  },
  // For NPM
//   {
//     input: `src/${pkg.name.replace(/^\@.*\//, "")}.ts`,
//     output: [
//       {
//         file: pkg.module,
//         format: "es",
//         sourcemap: "inline",
//         exports: "named",
//       },
//     ],
//     external: [
//       ...Object.keys(pkg.dependencies || {}),
//       ...Object.keys(pkg.devDependencies || {}),
//     ],
//     plugins: [
//       pluginTypescript(),
//       pluginBabel({
//         babelHelpers: "bundled",
//         configFile: path.resolve(__dirname, ".babelrc.js"),
//       }),
//     ],
//   },
  // For NPM
//   {
//     input: "src/index.ts",
//     output: [
//       {
//         file: pkg.main,
//         format: "cjs",
//         sourcemap: "inline",
//         exports: "default",
//       },
//     ],
//     external: [
//       ...Object.keys(pkg.dependencies || {}),
//       ...Object.keys(pkg.devDependencies || {}),
//     ],
//     plugins: [
//       pluginTypescript(),
//       pluginBabel({
//         babelHelpers: "bundled",
//         configFile: path.resolve(__dirname, ".babelrc.js"),
//       }),
//     ],
//   },
];
