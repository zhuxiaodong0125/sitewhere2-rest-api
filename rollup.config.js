import babel from "rollup-plugin-babel";

export default [
  {
    input: "src/index.js",
    output: {
      dir: "dist",
      file: "sitewhere2-rest-api.js",
      format: "umd",
      name: "sitewhere2-rest-api"
    },
    plugins: [babel()]
  }
];
