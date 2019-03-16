module.exports = function(api) {
  api.cache(true);
  const presets = [
  [
    "@babel/env",
    {
      targets: {
        browsers : ["last 2 versions"],
      },
      useBuiltIns: "usage",
    },
  ],
];

  const plugins = [ 
    ["@babel/plugin-transform-runtime",
    {
      "absoluteRuntime": false,
      "corejs": false,
      "helpers": true,
      "regenerator": true,
      "useESModules": false
    }],
   ];
  return {
    presets,
    plugins
  }
}