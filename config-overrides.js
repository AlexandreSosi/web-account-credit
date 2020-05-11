const { addBabelPlugin, override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    "babel-plugin-root-import",
    {
      rootPathSuffix: "src"
    }
  ]),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
   style: 'css',
   style: true,
  }),
 addLessLoader({
   javascriptEnabled: true,
   modifyVars: { '@layout-header-background': '#fff' },
 }),
);
