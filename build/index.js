
const EasyWebpack = require('easywebpack-html');
const webpackConfig = new EasyWebpack.WebpackClientBuilder(require('../webpack.config')).create();
if(process.env.NODE_SERVER){
  EasyWebpack.server(webpackConfig, {}, () => {});
}else{
  EasyWebpack.build(webpackConfig, {}, () => {});
}
