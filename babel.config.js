module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      {
        unstable_disableES6Transforms: true,
      },
    ],
  ],
  plugins: [['@babel/plugin-proposal-decorators', {legacy: true}]],
};
