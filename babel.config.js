module.exports = function(api) {
  const presets = ['react-app'];
  const plugins = [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }]
  ];
  if (api.env('development')) {
    plugins.push('react-hot-loader/babel');
  }
  presets.push('@babel/preset-react');
  plugins.push("@babel/plugin-syntax-dynamic-import");
  return { presets, plugins };
};
